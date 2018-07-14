//from system
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appAction from '../../store/action/appAction';
import * as uploadAction from '../../store/action/uploadAction';
import * as websocketAction from '../../store/action/websocketAction';
import { Grid, Col, Glyphicon } from 'react-bootstrap';
import { show } from '../../components/CustomNotification'


class OverViewContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repositoryContainerInfo: {
      },
      logs: [],
      buildLogs: true,
      appLogs: false
    };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    let { buildLogs, appLogs } = this.state;
    if (buildLogs) {
      this.setState({ repositoryContainerInfo: this.props.appReducer.repositoryContainerInfo, logs: nextProps.websocketReducer.socketMessages })
    }
    if (appLogs) {
      this.setState({ repositoryContainerInfo: this.props.appReducer.repositoryContainerInfo, logs: nextProps.appReducer.logs })
    }
  }

  buildProject = () => {
    let { repositoryName, path } = this.props.appReducer.currentRepository;
    show("success","Job added to Queue",4000)
    this.setState({ appLogs: false, buildLogs: true })
    this.props.appAction.manualDeploy(repositoryName, path)
  }

  fetchContainerLogs = (repositoryName) => {
    this.setState({ appLogs: true, buildLogs: false })
    this.props.appAction.getRepositoryLogs(repositoryName)
  }

  render() {
    let {logs, repositoryContainerInfo,buildLogs, appLogs } = this.state;
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
                        {
                          // u001b[1A
                          buildLogs ? <span>{logLine.message.replace(/[\u001b]\[[a-z A-Z 0-9].*[a-z A-Z 0-9]/gu, "..")}</span> :
                            null
                        }
                        {
                          appLogs ? <span>{logLine}</span> :
                            null
                        }
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
})(OverViewContainer);
