//from system
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserStore } from '../../helper/collection'
import * as appAction from '../../store/action/appAction';
import * as uploadAction from '../../store/action/uploadAction';
import * as websocketAction from '../../store/action/websocketAction';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import { history } from '../../route/history';
import DashboardHeader from '../../components/DashboardHeader';
import Footer from '../../components/Footer';


class DashboardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      loading: true,
      isLoggedIn: false
    }
  }

  componentDidMount() {
    if (this.props.appReducer.isLoggedIn || browserStore.get("token")) {
      setTimeout(() => {
        this.props.appAction.getRepositories();
        this.props.websocketAction.init();
      }, 500)
    }
  }

  nullRepositoyMsg = () => {
    return (
    <div style={{textAlign:"center"}}>
      <img src="../../../assets/search.svg" style={{ width: 150, height: 150 }} />
      <h1 style={{fontWeight : "lighter"}}>Oops !!!</h1>
      <h4>Looks like you haven't created app yet, Click new app to get started</h4>
    </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ repositories: nextProps.appReducer.repositories, loading: nextProps.appReducer.isFetching })
  }

  componentWillUnmount() {

  }

  render() {
    let { repositories, loading, isLoggedIn } = this.state;
    return (
      <div>
        <DashboardHeader />
        <div style={{ height: "100vh" }}>
          <Grid>
            <Row style={{}}>
              <Col xs={6} md={6}>
                <div style={{ textAlign: "left" }}>
                  <h3 style={{ marginTop: 5, fontWeight: 700 }}>My Apps</h3>
                </div>
              </Col>
              <Col xs={6} md={6}>
                <div style={{ textAlign: "right" }}>
                  <button className="border-button" onClick={() => {
                    history.push(`/new/app/`)
                  }}
                  >New App</button>
                </div>
              </Col>
            </Row>

            {!loading ?
              <div style={{ marginTop: 50, marginBottom: 50 }}>
                {
                  repositories.length == 0 ?
                    this.nullRepositoyMsg() :
                    repositories.map((x, i) => {
                      return (
                        <Grid style={{ marginTop: 0, paddingTop: 10 }} className="app-list" key={i} onClick={() => { history.push(`/app/${x.repositoryName}`) }}>
                          <Row>
                            <Col xs={6} md={6}>
                              <div style={{ textAlign: "left" }}>
                                <h4 style={{}}>{x.repositoryName}</h4>
                              </div>
                            </Col>
                            <Col xs={6} md={6}>
                              <div style={{ textAlign: "right" }}>
                                <h4 style={{}}>nodeJS <Glyphicon glyph="chevron-right" /></h4>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <hr style={{ borderColor: "#d8d7d7", marginBottom: 0 }} />
                          </Row>
                        </Grid>
                      )
                    })
                }

              </div> :
              <div style={{ height: "100vh", textAlign: "center", padding: "10% 0" }}>
                <div style={{ padding: "5% 0", textAlign: "center" }}>
                  < img src="../../../assets/loading.gif" style={{ width: "10%", height: "10%" }} />
                </div>
              </div>
            }
          </Grid>
        </div>

        <footer>
          <Footer />
        </footer>

      </div>

    )
  }
}

const mapStateToProps = state => ({
  appReducer: state.appReducer,
  uploadReducer: state.uploadReducer,
  websocketReducer: state.websocketReducer
});

const mapDispatchToProps = dispatch => ({
  appAction: bindActionCreators(appAction, dispatch),
  uploadAction: bindActionCreators(uploadAction, dispatch),
  websocketAction: bindActionCreators(websocketAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(DashboardContainer);
