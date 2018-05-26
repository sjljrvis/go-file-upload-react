//from system
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { makeRequest } from '../helper/internet'
import { browserStore } from '../helper/collection'
import * as appAction from '../store/action/appAction';
import * as uploadAction from '../store/action/uploadAction';
import { height } from 'window-size';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';

import DashboardHeader from '../components/DashboardHeader'
import Footer from '../components/Footer'
import Deploy from './Deploy'
import Settings from './Settings'
import OverView from './OverView';
import Notification from '../components/Notification'
class RepositoryContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: [true, false, false, false],
      notification: { show: false, type: "success", message: "Success" }
    };
  }

  addActiveClass() {
    this.setState({
      active: true
    })
  }

  toggleClass = (i) => {
    let currentState = [false, false, false, false];
    currentState[i] = !currentState[i]
    this.setState({ active: currentState });
  };

  showNotification = (type, message, duration) => {
    this.setState({ notification: { show: true, type: type, message: message } });
    setTimeout(() => {
      this.setState({ notification: { show: false, type: type, message: message } })
    },duration)
  }

  componentDidMount() {
  }

  render() {
    let { active } = this.state;
    return (
      <div>
        <DashboardHeader />
        <div style={{}}>
          <Grid>
            <Row style={{}}>
              <Col xs={6} md={6}>
                <div style={{ textAlign: "left" }}>
                  <h3 style={{ marginTop: 5, fontWeight: 700 }}>AppName</h3>
                </div>
              </Col>
              <Col xs={6} md={6}>
                <div style={{ textAlign: "right" }}>
                  <button className="normal-button normal-button-green">Open</button>
                </div>
              </Col>
            </Row>

            <div style={{ marginTop: 100, marginLeft: 20 }}>
              <Grid>
                <Row>
                  <div style={{ display: "flex", flexDirection: "row", }}>

                    <div className={this.state.active[0] ? 'nav-bar-div-active' : "nav-bar-div"}
                      onClick={() => { this.toggleClass(0) }}
                    >
                      <h4 style={{ margin: 10 }}>Overview</h4>
                    </div>

                    <div className={this.state.active[1] ? 'nav-bar-div-active' : "nav-bar-div"}
                      onClick={() => { this.toggleClass(1) }}
                    >
                      <h4 style={{ margin: 10 }}>Deploy</h4>
                    </div>

                    <div className={this.state.active[2] ? 'nav-bar-div-active' : "nav-bar-div"}
                      onClick={() => { this.toggleClass(2) }}
                    >
                      <h4 style={{ margin: 10 }}>Metrics</h4>
                    </div>

                    <div className={this.state.active[3] ? 'nav-bar-div-active' : "nav-bar-div"}
                      onClick={() => { this.toggleClass(3) }}
                    >
                      <h4 style={{ margin: 10 }}>Settings</h4>
                    </div>

                  </div>
                </Row>
              </Grid>
              <hr style={{ borderColor: "#d8d7d7", marginTop: 0 }} />
            </div>
            <Grid>
              <Row>
                {active[0] ?
                  <div>
                    <OverView  showNotification={this.showNotification}/>
                  </div> : null
                }

                {active[1] ?
                  <div>
                    <Deploy />
                  </div> : null
                }

                {active[2] ?
                  <div>
                    <h1>Metrics</h1>
                  </div> : null
                }

                {active[3] ?
                  <div>
                    <Settings />
                  </div> : null
                }
              </Row>
            </Grid>
          </Grid>
        </div>
        <footer>
          <Footer />
        </footer>
        {
          this.state.notification.show ?
            <Notification type={this.state.notification.type} message={this.state.notification.message} show={this.state.notification.show} />
            : null
        }
      </div>

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
})(RepositoryContainer);
