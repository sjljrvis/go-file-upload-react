//from system
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeRequest } from '../../helper/internet'
import { browserStore } from '../../helper/collection'
import * as appAction from '../../store/action/appAction';
import * as uploadAction from '../../store/action/uploadAction';
import * as websocketAction from '../../store/action/websocketAction';
import { height } from 'window-size';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import {APP_URL_BASE} from '../../helper/constant';
import DashboardHeader from '../../components/DashboardHeader'
import Notification from '../../components/Notification'
import Footer from '../../components/Footer'
import Deploy from './Deploy'
import Settings from './Settings'
import OverView from './OverView';
import { webSocket } from 'rxjs/observable/dom/webSocket';
class RepositoryContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: [true, false, false, false],
      notification: { show: false, type: "success", message: "Success" }
    };
    respositoryContainerInfo :{}
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
    }, duration)
  }

  handleAppUrl = () => {
    let {currentRepository} = this.props.appReducer ;
    let appWindow = window.open(`http://${currentRepository.repositoryName}.${APP_URL_BASE}`, '_blank');
    appWindow.focus();
  }

  componentDidMount() {
    let repositoryName = this.props.match.params.appName;
    let currentRepository = this.props.appReducer.repositories.filter(x => x.repositoryName == repositoryName)[0];
    currentRepository ? this.props.appAction.setCurrentRepository(currentRepository) : this.props.history.push('/d')
    this.props.appAction.getRepositoriesInfo(currentRepository.repositoryName);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.appReducer.respositoryContainerInfo){
      let {respositoryContainerInfo} = nextProps.appReducer
      this.setState({respositoryContainerInfo})
    }
  }

  componentWillUnmount(){
    this.props.appAction.clearRepositoryLogs()
  }

  render() {
    let { active ,respositoryContainerInfo} = this.state;
    let { currentRepository } = this.props.appReducer
    return (
      <div>
        <DashboardHeader />
        <div style={{}}>
          <Grid>
            <Row style={{}}>
              <Col xs={6} md={6}>
                <div style={{ textAlign: "left" }}>
                  <h3 style={{ marginTop: 5, fontWeight: 700 }}>{currentRepository.repositoryName}</h3>
                </div>
              </Col>
              <Col xs={6} md={6}>
                <div style={{ textAlign: "right" }}>
                  <button className="normal-button normal-button-green" onClick={() => { this.handleAppUrl() }}>Open</button>
                </div>
              </Col>
            </Row>

            <div style={{ marginTop: 50, marginLeft: 20 }}>
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
                    <OverView showNotification={this.showNotification} 
                    respositoryContainerInfo={respositoryContainerInfo}
                    />
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
  uploadReducer: state.uploadReducer,
  websocketReducer : state.webSocketReducer
});

const mapDispatchToProps = dispatch => ({
  appAction: bindActionCreators(appAction, dispatch),
  uploadAction: bindActionCreators(uploadAction, dispatch),
  websocketAction:bindActionCreators(websocketAction,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(RepositoryContainer);
