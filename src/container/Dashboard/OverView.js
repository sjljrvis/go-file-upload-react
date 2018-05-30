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
import { Grid, Row, Col, Tabs, Tab, Glyphicon } from 'react-bootstrap';
import { black } from 'material-ui/styles/colors';

class OverViewContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repositoryContainerInfo: {
      },
      logs: []
    };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ repositoryContainerInfo: this.props.appReducer.repositoryContainerInfo, logs: nextProps.appReducer.logs })
  }

  buildProject = () => {
    this.props.showNotification("success", "Job added to queue", 4000)
  }

  fetchContainerLogs = (repositoryName) => {
    this.props.appAction.getRepositoryLogs("channelmanager")
  }

  render() {
    let { repositoryContainerInfo, logs } = this.state;
    let { currentRepository } = this.props.appReducer;
    let size = repositoryContainerInfo.HostConfig ? repositoryContainerInfo.HostConfig.ShmSize : 0;
    let ipAddress = repositoryContainerInfo.NetworkSettings ? repositoryContainerInfo.NetworkSettings.IPAddress : 0;
    let macAddress = repositoryContainerInfo.NetworkSettings ? repositoryContainerInfo.NetworkSettings.MacAddress : 0;
    return (
      <Grid>
        <Col sm={12} md={4}>

          <div>
            <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Git</h4>
            <pre> http://git.tocstack.com/{currentRepository.repositoryName}</pre>
          </div>

          <div>
            <h4 style={{ color: "#ff5722", fontWeight: 400 }}>App info</h4>
            <h4 style={{ fontWeight: 200 }}>Size : {size} mb</h4>
            <h4 style={{ fontWeight: 200 }}>IP :  {ipAddress}</h4>
            <h4 style={{ fontWeight: 200 }}>MAC : {macAddress}</h4>
          </div>

          <div>
            <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Contributors</h4>

            <h4 style={{ fontWeight: 200 }}>sjljrvis@gmail.com</h4>
            <h4 style={{ fontWeight: 200 }}>sjl@tocstack.com</h4>
          </div>

        </Col>

        <Col sm={12} md={8}>
          <h4 style={{ color: "#ff5722", fontWeight: 400, marginRight: 10 }}>Logs</h4>

          <button style={{ width: 100, margin: 10 }} className="border-button" onClick={() => { this.buildProject() }}><Glyphicon glyph="refresh" /> Rebuild</button>
          <button style={{ width: 100, margin: 10 }} className="border-button" onClick={() => { this.fetchContainerLogs(currentRepository.repositoryName) }}><Glyphicon glyph="list-alt" /> Fetch Logs</button>

          <div style={{ height: 400, width: "auto" }} className="log-body">
            {
              logs.map((logLine, index) => {
                return (
                  <div className="log-line" key={index}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div style={{ width: "10%", color: "#666" }}>
                        <span style={{ marginRight: 10, color: "#666" }}>{index}</span>
                      </div>
                      <div style={{ width: "90%" }}>
                        <span>{logLine}</span>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </Col>

      </Grid>
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
})(OverViewContainer);
