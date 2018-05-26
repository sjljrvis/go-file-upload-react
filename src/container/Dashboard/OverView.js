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

    };
  }

  componentDidMount() {
  }
  buildProject = () => {
    this.props.showNotification("success", "Job added to queue", 4000)
  }
  render() {
    return (

      <Grid>
        <Col sm={12} md={4}>

          <div>
            <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Git</h4>
            <pre> https://git.heroku.com/mailtrainapp.git</pre>
          </div>

          <div>
            <h4 style={{ color: "#ff5722", fontWeight: 400 }}>App info</h4>
            <h4 style={{ fontWeight: 200 }}>Size : 64 mb</h4>
            <h4 style={{ fontWeight: 200 }}>IP :  192.168.1.164</h4>
            <h4 style={{ fontWeight: 200 }}>MAC : aa:32:sd:42:12:r31we</h4>
          </div>

          <div>
            <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Contributors</h4>

            <h4 style={{ fontWeight: 200 }}>sjljrvis@gmail.com</h4>
            <h4 style={{ fontWeight: 200 }}>sjl@tocstack.com</h4>
          </div>

        </Col>

        <Col sm={12} md={8}>
          <h4 style={{ color: "#ff5722", fontWeight: 400, marginRight: 10 }}>App Logs</h4>
          <button style={{ width: 100, margin: 10 }} className="border-button" onClick={() => { this.buildProject() }}><Glyphicon glyph="refresh" /> Rebuild</button>

          <div style={{ height: 500 }} className="log-body">
            <div className="log-line">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "5%", color: "#666" }}>
                  <span style={{ marginRight: 10, color: "#666" }}>1</span>
                </div>
                <div style={{ width: "95%" }}>
                  <span>v8.11.1</span>
                </div>
              </div>
            </div>

            <div className="log-line">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "5%", color: "#666" }}>
                  <span style={{ marginRight: 10, color: "#666" }}>1</span>
                </div>
                <div style={{ width: "95%" }}>
                  <span>Make some changes to the code you just cloned and deploy them to Heroku using Git.</span>
                </div>
              </div>
            </div>

            <div className="log-line">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "5%", color: "#666" }}>
                  <span style={{ marginRight: 10, color: "#666" }}>1</span>
                </div>
                <div style={{ width: "95%" }}>
                  <span>
                    W: http://us-central1.gce.archive.ubuntu.com/ubuntu/dists/precise-updates/InRelease: Signature by key 630239CC130E1A7FD81A27B140976EAF437D05B5 uses weak digest algorithm (SHA1)</span>
                </div>
              </div>
            </div>

            <div className="log-line">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "5%", color: "#666" }}>
                  <span style={{ marginRight: 10, color: "#666" }}>1</span>
                </div>
                <div style={{ width: "95%" }}>
                  <span>Make some changes to the code you just cloned and deploy them to Heroku using Git</span>
                </div>
              </div>
            </div>

            <div className="log-line">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "5%", color: "#666" }}>
                  <span style={{ marginRight: 10, color: "#666" }}>1</span>
                </div>
                <div style={{ width: "95%" }}>
                  <span>v8.11.1</span>
                </div>
              </div>
            </div>

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
