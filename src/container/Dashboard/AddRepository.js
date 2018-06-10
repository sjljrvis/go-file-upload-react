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
import { height } from 'window-size';
import { Grid, Row, Col, Tabs, Tab, Glyphicon, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import DashboardHeader from '../../components/DashboardHeader'
import Notification from '../../components/Notification'
import Footer from '../../components/Footer'
import Deploy from './Deploy'
import Settings from './Settings'
import OverView from './OverView';
class AddRepositoryContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notification: { show: false, type: "success", message: "Success" },

      repositoryName: "",
      language: "nodeJS",
      description: ""

    };
  }

  showNotification = (type, message, duration) => {
    this.setState({ notification: { show: true, type: type, message: message } });
    setTimeout(() => {
      this.setState({ notification: { show: false, type: type, message: message } })
    }, duration)
  }

  componentDidMount() {
  }

  handleCreate = () => {
    let { repositoryName, language, description } = this.state;
    let payload = { repositoryName, language, description };
    this.props.appAction.createRepository(payload);
  }

  render() {
    let { language } = this.state;
    return (
      <div>
        <DashboardHeader />
        <div style={{ marginBottom: 20 }}>
          <Grid>
            <Grid>
              <h3>Create a new App</h3>
              <h5 style={{ fontWeight: 400 }}>This git repository will contain all files and code</h5>

              <Col sm={12} md={8}>
                <div className="" style={{ marginTop: 25 }}>
                  <Row>
                    <Col sm={12} md={4}>
                      <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Name</h4>
                    </Col>

                    <Col sm={12} md={8}>
                      <div className="search-box" style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 40, paddingLeft: 20 }}>
                        <Glyphicon glyph="tasks" style={{ paddingTop: 10, paddingRight: 7 }} />
                        <input placeholder="Myapp" style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}
                          onChange={(e) => { this.setState({ repositoryName: e.target.value }) }}
                        ></input>
                      </div>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 10 }}>
                    <Col sm={12} md={4}>
                      <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Language</h4>
                    </Col>
                    <Col sm={12} md={8}>
                      <div className="input-box-repo">
                        <select onChange={(e) => {
                          console.log(e.target.value)
                          this.setState({ language: e.target.value })
                        }}
                          value={language}
                        >
                          <option value="nodeJS">nodeJS</option>
                          <option value="golang">go-lang</option>
                          <option value="ruby">ruby</option>
                        </select>
                      </div>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 10 }}>
                    <Col sm={12} md={4}>
                      <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Description</h4>
                    </Col>
                    <Col sm={12} md={8}>
                      <div className="input-box-repo" style={{ height: 40, padding: 8 }}>
                        <input placeholder="My first project" style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}
                          onChange={(e) => { this.setState({ description: e.target.value }) }}
                        ></input>
                      </div>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 40 }}>
                    <Col sm={12} md={4}>
                      <button className="normal-button" onClick={() => { this.handleCreate() }}>Create app</button>
                    </Col>
                  </Row>


                </div>
              </Col>

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
})(AddRepositoryContainer);
