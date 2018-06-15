//from system
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeRequest } from '../../helper/internet'
import * as appAction from '../../store/action/appAction';
import * as uploadAction from '../../store/action/uploadAction';
import { Grid, Row, Col } from 'react-bootstrap';
import GitHubLogin from 'react-github-login';
import {
  GITHUB_CLIENT_ID,
  GITHUB_REDIRECT_URI
} from '../../helper/constant'
class DeployContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: [true, false],
      showConnectButton: false,
      showRepoList: true,
      githubConnected: false,
      githubRepos: [],
      githubUser: {},
      branch: "master",
      showLoadingGif: false
    }
  }

  toggleClass = (i) => {
    let currentState = [false, false];
    currentState[i] = !currentState[i]
    this.setState({ active: currentState });
  };


  unlinkAppFromGithub = async (repositoryName) => {
    let { data: { repository } } = await (makeRequest(`/repository/unlink/${repositoryName}`, "PUT", null, null));
    this.props.appAction.setCurrentRepository(repository)
  }

  linkAppToGithub = async (githubRepository) => {
    let { currentRepository: { repositoryName } } = this.props.appReducer;
    let payload = {
      githubRepositoryName: githubRepository.name,
      githubRepositoryUrl: githubRepository.clone_url,
    }
    let { data: { repository } } = await (makeRequest(`/repository/link/${repositoryName}`, "PUT", null, payload));
    this.props.appAction.setCurrentRepository(repository)
  }


  onSuccess = async (response) => {
    this.setState({ showLoadingGif: true })
    try {
      let { data: { data: { user, repositories } } } = await makeRequest('/github/oauth', "POST", null, { code: response.code, state: "" });
      this.setState({ githubRepos: repositories, githubUser: user, showRepoList: true, showConnectButton: false, showLoadingGif: false })
    } catch (e) {
      console.log(e)
    }
  };

  onFailure = response => {
  };

  async componentDidMount() {
    let { currentRepository } = this.props.appReducer;
    try {
      let { data: { data: { user } } } = await (makeRequest('/github/user', "GET", null, null));
      let { data: { data: { repositories } } } = await (makeRequest(`/github/repos?userName=${user.login}`, "GET", null, null));
      this.setState({ githubRepos: repositories, githubUser: user, showRepoList: true })
    } catch (e) {
      console.log(e)
      this.setState({ showConnectButton: true, showRepoList: false })
      this.unlinkAppFromGithub(currentRepository.repositoryName)
    }
  }

  render() {
    let { active, showRepoList, showConnectButton, githubRepos, githubUser, branch, showLoadingGif } = this.state;
    let { currentRepository } = this.props.appReducer;
    let CLIENT_ID = GITHUB_CLIENT_ID;
    let REDIRECT_URI = GITHUB_REDIRECT_URI
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={12} md={4}>
              <h4 style={{ color: "#ff5722", fontWeight: 400 }}> Deployment Method</h4>
            </Col>

            <Col sm={12} md={8}>
              <div style={{ display: "flex", flexDirection: " row" }}>
                <div style={{ width: 125, margin: 5, padding: 5 }} className={active[0] ? "deploy-active" : null}
                  onClick={() => { this.toggleClass(0) }}
                >
                  <h4><img src="../../assets/code-fork-symbol.svg" style={{ height: 25, width: 25, paddingRight: 5 }} />tocstack-Git</h4>
                </div>

                <div style={{ width: 125, margin: 5, padding: 5 }} className={active[1] ? "deploy-active" : null}
                  onClick={() => { this.toggleClass(1) }}
                >
                  <h4><img src="../../assets/github.svg" style={{ height: 25, width: 25, paddingRight: 5 }} />Github</h4>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <hr style={{ borderColor: "#d8d7d7", width: "95%" }} />
          </Row>
        </Grid>
        <Grid style={{ marginBottom: 50 }}>
          {
            active[0] ?
              <Row>
                <Col sm={12} md={4}>
                  <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Deploy using tocstack Git</h4>
                </Col>

                <Col sm={12} md={8}>
                  <h4 style={{ fontWeight: 100 }}>Install tocstack CLI</h4>
                  <pre>$ heroku login</pre>

                  <h4 style={{ fontWeight: 100 }}>Clone the repository</h4>
                  <p style={{ textAlign: "left", fontSize: 14 }}>Use Git to clone mailtrainapp's source code to your local machine.</p>
                  <pre>$ heroku git:clone -a mailtrainapp<br />
                    $ cd mailtrainapp</pre>

                  <h4 style={{ fontWeight: 100 }}>Deploy your changes</h4>
                  <p style={{ textAlign: "left", fontSize: 14 }}>Make some changes to the code you just cloned and deploy them to Heroku using Git.</p>
                  <pre>$ git add .<br />
                    $ git commit -am "make it better"<br />
                    $ git push heroku master</pre><br />
                </Col>
              </Row>
              :
              active[1] ?
                <Row>
                  {/* /********Fetch info from github********** */}
                  <Col sm={12} md={4} style={{ marginTop: 10, marginBottom: 10 }}>
                    <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Connect to Github</h4>
                  </Col>

                  <Col sm={12} md={8} style={{ marginTop: 10, marginBottom: 10 }} >
                    {showConnectButton ?
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <GitHubLogin
                          className="border-button"
                          clientId={CLIENT_ID}
                          redirectUri={REDIRECT_URI}
                          onSuccess={this.onSuccess}
                          onFailure={this.onFailure} />
                        {
                          showLoadingGif ? < img src="../../../assets/loading.gif" style={{ width: "5%", height: "5%", marginTop: 5 }} /> : null
                        }
                      </div>
                      :

                      (showRepoList && !currentRepository.github.connected && !showConnectButton) ?
                        <div className="border-box" style={{ height: 400, overflow: "auto" }}>
                          <div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                              {
                                githubUser.avatarUrl ?
                                  <img className="blog-avatar-img" style={{ height: 30, width: 30 }} src={githubUser.avatarUrl} /> : null
                              }
                              <h5 style={{ fontWeight: 400 }}>&nbsp;&nbsp;{githubUser.login}</h5>
                            </div>
                            <hr style={{ borderColor: "#d8d7d7", width: "100%" }} />
                          </div>

                          {githubUser.login ?
                            githubRepos.map((repo, index) => {
                              return (
                                <div key={index}>
                                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <div style={{ textAlign: "left" }}>
                                      <h5 style={{ fontWeight: 400 }}>{index + 1} . {repo.name}</h5>
                                    </div>
                                    <div style={{ textAlign: "right" }}>
                                      <button className="border-button" style={{ height: 25 }}
                                        onClick={() => { this.linkAppToGithub(repo) }}
                                      > link </button>
                                    </div>
                                  </div>
                                  <hr style={{ borderColor: "#d8d7d7", width: "100%" }} />
                                </div>
                              )
                            }) :
                            <div style={{ padding: "5% 0", textAlign: "center" }}>
                              < img src="../../../assets/loading.gif" style={{ width: "10%", height: "10%" }} />
                            </div>
                          }
                        </div> :
                        <div>
                          <h4>App connected to github</h4>
                          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <h5>
                              <img src="../../assets/github.svg" style={{ height: 25, width: 25, paddingRight: 5 }} />
                              Linked to <span>{githubUser.login || "default"}/{currentRepository.github.repositoryName}</span>
                              &nbsp;by&nbsp;{githubUser.login}
                            </h5>

                            <button style={{ height: 25 }} className="normal-button-red border-button" onClick={() => { this.unlinkAppFromGithub(currentRepository.repositoryName) }} > Unlink</button>
                          </div>
                          <hr style={{ borderColor: "#d8d7d7", width: "95%" }} />
                        </div>
                    }

                  </Col>
                  {/* /********Fetch info from github********** */}


                  {/* /*********Select Branch********* */}
                  {
                    (showRepoList || currentRepository.github.connected) ?
                      <div>
                        <Col sm={12} md={4} style={{ marginTop: 10, marginBottom: 10 }}>
                          <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Select Branch</h4>
                        </Col>

                        <Col sm={12} md={8} style={{ marginTop: 10, marginBottom: 10 }}>
                          <div className="border-box" style={{ width: "50%", padding: 5, display: "flex", flexDirection: "row", }}>
                            <h4>
                              <img src="../../assets/code-fork-symbol.svg" style={{ height: 25, width: 25, paddingRight: 5 }} />
                              {branch}
                            </h4>
                          </div>
                        </Col>
                      </div> : null
                  }
                  {/* /*********Select Branch********* */}

                  {/* /*********Select Branch********* */}
                  {
                    (showRepoList || currentRepository.github.connected) ?
                      <div>
                        <Col sm={12} md={4} style={{ marginTop: 10, marginBottom: 10 }}>
                          <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Deploy Branch</h4>
                        </Col>

                        <Col sm={12} md={8} style={{ marginTop: 10, marginBottom: 10 }}>
                          <button className="border-button"> Deploy</button>
                        </Col>

                      </div>
                      : null
                  }
                  {/* /*********Select Branch********* */}

                </Row> :
                null
          }

        </Grid>

      </div >

    )
  }
}

const mapStateToProps = state => ({
  appReducer: state.appReducer,
  uploadReducer: state.uploadReducer
});

const mapDispatchToProps = dispatch => ({
  appAction: bindActionCreators(appAction, dispatch),
  uploadAction: bindActionCreators(uploadAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(DeployContainer);
