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
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

class SettingsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputBoxCount: 0,
      environmentVars: [{ key: "", value: "" }],
      showEnvironmentVarsButton: { text: "Show", visible: false },
      maintainanceMode: false
    }
    this.addInputBoxDom = this.addInputBoxDom.bind(this);
  }

  addInputBox = () => {
    let { inputBoxCount, environmentVars } = this.state;
    let temp = [{ key: "", value: "" }];
    environmentVars.push(temp)
    this.setState({ inputBoxCount: ++inputBoxCount, environmentVars: environmentVars })
  }

  removeInputBox = (i) => {
    let { inputBoxCount, environmentVars } = this.state;
    environmentVars = environmentVars.filter((item, index) => index != i)
    this.setState({ inputBoxCount: --inputBoxCount, environmentVars: environmentVars })
  }

  addEnvironmentVars = (e, i, type) => {
    let { environmentVars } = this.state;
    environmentVars[i].key = type == "key" ? e.target.value : environmentVars[i].key
    environmentVars[i].value = type == "value" ? e.target.value : environmentVars[i].value
    this.setState({ environmentVars: environmentVars })
  }

  addInputBoxDom = () => {
    let { inputBoxCount, environmentVars } = this.state;
    let inputBox = [];
    for (let i = 0; i < environmentVars.length - 1; i++) {
      inputBox.push(
        <Row key={i} style={{ marginTop: 10 }}>
          <Col sm={4} md={4}>
            <input placeholder="Key" className="input-box" value={environmentVars[i].key ? environmentVars[i].key : ""} onChange={(e) => { this.addEnvironmentVars(e, i, "key") }}></input>
          </Col>
          <Col sm={4} md={4}>
            <input placeholder="Value" className="input-box" value={environmentVars[i].value ? environmentVars[i].value : ""} onChange={(e) => { this.addEnvironmentVars(e, i, "value") }}></input>
          </Col>
          <Col sm={4} md={4}>
            <button className="border-button" onClick={() => { console.log(this.state) }}><Glyphicon glyph="save" /></button>
            <button className="border-button" onClick={() => { this.removeInputBox(i) }}><Glyphicon glyph="remove" /></button>
          </Col>
        </Row>
      )
    }
    return environmentVars.length - 1 > 0 ? inputBox : <h3>You haven't set environment variable to your project</h3>;
  }

  toggleEnvironmentVars = () => {
    let { showEnvironmentVarsButton } = this.state;
    showEnvironmentVarsButton.text = showEnvironmentVarsButton.text == "Show" ? "Hide" : "Show"
    showEnvironmentVarsButton.visible = showEnvironmentVarsButton.visible ? false : true;
    this.setState({ showEnvironmentVarsButton })
  }

  componentDidMount() {
  }

  render() {
    let { showEnvironmentVars, showEnvironmentVarsButton } = this.state;
    return (
      <div>

        <Grid>
          <Row>
            <Col sm={12} md={4}>
              <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Name</h4>
            </Col>

            <Col sm={12} md={8}>
              <h4 style={{ fontWeight: 100 }}>Appname</h4>
            </Col>
          </Row>
          <Row>
            <hr style={{ borderColor: "#d8d7d7", width: "95%" }} />
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Col sm={12} md={4}>
              <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Environment Variables</h4>
            </Col>

            <Col sm={12} md={8}>
              <button className="border-button" onClick={() => this.toggleEnvironmentVars()}>{showEnvironmentVarsButton.text}</button>

              <button disabled={!showEnvironmentVarsButton.visible} className="border-button" onClick={() => { this.addInputBox() }}>Add</button>
              <button className="border-button">Save</button>
              {
                showEnvironmentVarsButton.visible ?
                  this.addInputBoxDom() : null
              }
            </Col>
          </Row>

          <Row>
            <hr style={{ borderColor: "#d8d7d7", width: "95%" }} />
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Col sm={12} md={4}>
              <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Info</h4>
            </Col>
            <Col sm={12} md={8}>
              <Row>
                <Col sm={4} md={4}>
                  <h4 style={{ fontWeight: 100 }}>Language </h4>
                </Col>
                <Col sm={8} md={8}>
                  <h4 style={{ fontWeight: 100 }}>nodeJS</h4>
                </Col>
              </Row>
              <Row>
                <Col sm={4} md={4}>
                  <h4 style={{ fontWeight: 100 }}>Size </h4>
                </Col>
                <Col sm={8} md={8}>
                  <h4 style={{ fontWeight: 100 }}>15 mb</h4>
                </Col>
              </Row>
              <Row>
                <Col sm={4} md={4}>
                  <h4 style={{ fontWeight: 100 }}>tocstack Git Url </h4>
                </Col>
                <Col sm={8} md={8}>
                  <pre> https://git.heroku.com/mailtrainapp.git</pre>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <hr style={{ borderColor: "#d8d7d7", width: "95%" }} />
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Col sm={12} md={4}>
              <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Maintainance</h4>
            </Col>
            <Col sm={12} md={8}>
              <Row>
                <label className="switch">
                  <input type="checkbox" checked={this.state.maintainanceMode} onChange={() => { this.setState({ maintainanceMode: !this.state.maintainanceMode }) }} />
                  <span className="slider round"></span>
                </label>
              </Row>
            </Col>
          </Row>
          <Row>
            <hr style={{ borderColor: "#d8d7d7", width: "95%" }} />
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Col sm={12} md={4}>
              <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Delete App</h4>
            </Col>
            <Col sm={12} md={8}>
              <Row>
                <button className="normal-button-red border-button" >Delete</button>
              </Row>
            </Col>
          </Row>
          <Row>
            <hr style={{ borderColor: "#d8d7d7", width: "95%" }} />
          </Row>
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
})(SettingsContainer);
