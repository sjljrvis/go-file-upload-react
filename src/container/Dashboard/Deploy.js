//from system
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { makeRequest } from '../../helper/internet'
import { browserStore } from '../../helper/collection'
import * as appAction from '../../store/action/appAction';
import * as uploadAction from '../../store/action/uploadAction';
import { height } from 'window-size';
import { Grid, Row, Col } from 'react-bootstrap';
import GitHubLogin from 'react-github-login';

class DeployContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: [true, false]
    }
  }

  toggleClass = (i) => {
    let currentState = [false, false];
    currentState[i] = !currentState[i]
    this.setState({ active: currentState });
  };



  onSuccess = async (response) => {
    try {
      let data = await makeRequest('/github/oauth', "POST", null, { code: response.code, state: "" })
      console.log(data)

    } catch (e) {
      console.log(e)
    }
  };

  onFailure = response => {

  };

  componentDidMount() {
  }

  render() {
    let { active } = this.state;
    let CLIENT_ID = "Iv1.16b554c48fa726fb";
    let REDIRECT_URI = "http://localhost:8082/oauth"
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
        <Grid>
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
                  <Col sm={12} md={4}>
                    <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Connect to Github</h4>
                  </Col>

                  <Col sm={12} md={8}>
                    <GitHubLogin
                      className="border-button"
                      clientId={CLIENT_ID}
                      redirectUri={REDIRECT_URI}
                      onSuccess={this.onSuccess}
                      onFailure={this.onFailure} />,
                  </Col>
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
