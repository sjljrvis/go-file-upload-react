//from system
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { history } from '../route/history';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { makeRequest } from '../helper/internet'
import { browserStore } from '../helper/collection'
import * as appAction from '../store/action/appAction';
import * as uploadAction from '../store/action/uploadAction';
import { height } from 'window-size';

import { Grid, Row, Col, Glyphicon, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

class HomePageContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }

  render() {
    return (

      <div style={{ marginLeft: 0, marginRight: 0 }}>
        <div>
          <Grid style={{ marginTop: 50 }}>
            <h1 style={{ color: "#ff5722", fontWeight: "lighter", textAlign: "center", fontSize: "3em" }}>One shot app deployment</h1>
            <br />
            <h4 style={{ fontWeight: "lighter", textAlign: "center", fontSize: "2em" }}> Don’t waste time writing server configuration. #PaaS </h4>
            <br />
            <div style={{ textAlign: "center" }}>
              <button className="heroButton" onClick={() => { history.push('/register') }}>Sign Up</button>
            </div>
            <Grid style={{ width: "60%", marginTop: 40 }}>
              <Row>
                <Col sm={12} md={4} style={{ textAlign: "center" }}>
                  <img src="../../assets/wrench.svg" style={{ width: "40%", height: "40%" }} />
                  <h3> 1 . Develop</h3>
                </Col>
                <Col sm={12} md={4} style={{ textAlign: "center" }}>
                  <img src="../../assets/cloud-computing.svg" style={{ width: "40%", height: "40%" }} />
                  <h3> 2 . Deploy</h3>
                </Col>
                <Col sm={12} md={4} style={{ textAlign: "center" }}>
                  <img src="../../assets/diagram.svg" style={{ width: "40%", height: "40%" }} />
                  <h3> 3 . Scale</h3>
                </Col>
              </Row>
            </Grid>
          </Grid>
        </div>

        <div>
          <hr style={{ borderColor: "#d8d7d7", width: "60%" }} />
          <h1 style={{ color: "#ff5722", fontWeight: "lighter", textAlign: "center", fontSize: "3em" }}>What is tocstack ?</h1>
          <br />
          <h4 style={{ fontWeight: "lighter", textAlign: "center", fontSize: "2em" }}> tocstack is easy to use #PaaS for fast application deployment using git</h4>
          <br />
          <p>Developers and teams can use <span>tocstack</span> to build ,run and manage applications,microservices,APIs etc entirely on cloud</p>
          <br />
        </div>

        <div>
          <hr style={{ borderColor: "#d8d7d7", width: "60%" }} />
          <div className="container">
            <h1 style={{ color: "#ff5722", fontWeight: "lighter", textAlign: "center", fontSize: "3em" }}>How to use?</h1>
            <Row>
              <Col sm={6} md={6}>
                <div style={{ marginLeft: "auto", marginRight: "auto", marginTop: 50, height: 207 }}>
                  <Col md={6}></Col>
                  <Col md={6}>
                    <ul>
                      <li><h3>Write code</h3></li>
                      <li><h3>git push tocstack master</h3></li>
                      <li><h3>App is online 😃</h3></li>
                    </ul>
                  </Col>
                </div>
              </Col>
              <Col sm={6} md={6} style={{ textAlign: "center" }}>
                <img src='../../assets/android.png' style={{ width: "60%", height: "60%" }} />
              </Col>
            </Row>
          </div>
        </div>

        <div >
          <hr style={{ borderColor: "#d8d7d7", width: "60%" }} />
          <h1 style={{ color: "#ff5722", fontWeight: "lighter", textAlign: "center", fontSize: "3em" }}>Quick Demo</h1>
          <Grid style={{ width: "60%", marginTop: 0 }}>
            <Row>
              <h4 style={{ fontWeight: "lighter", textAlign: "left", fontSize: "2em", fontWeight: "bolder" }}>1 . Create new App</h4>
            </Row>
            <Row>
              <p style={{ textAlign: "left" }}>Login to tocstack and click new app ,choose your preferred programming language and click create</p>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <img src="../../assets/demo1.png" className="image-box" />
            </Row>
          </Grid>
        </div>

        <div style={{ backgroundColor: "#FAFAFC", marginTop: 30 }}>
          <Grid style={{ width: "60%", paddingBottom: 30, paddingTop: 30 }}>
            <Row>
              <h4 style={{ fontWeight: "lighter", textAlign: "left", fontSize: "2em", fontWeight: "bolder" }}>2 . Code your app</h4>
            </Row>
            <Row>
              <p style={{ textAlign: "left" }}>This is the best part ☺ ,given example is simple a helloworld app written in nodeJS</p>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <img src="../../assets/demo2.png" className="image-box" />
            </Row>
          </Grid>
        </div>

        <div style={{ marginTop: 30 }}>
          <Grid style={{ width: "60%" }}>
            <Row>
              <h4 style={{ fontWeight: "lighter", textAlign: "left", fontSize: "2em", fontWeight: "bolder" }}>3 . Deploy with git</h4>
            </Row>
            <Row>
              <p style={{ textAlign: "left" }}>Automated deployment goodness, just git push to see your app/service online</p>
            </Row>
            <Row>
              <ul>
                <li><h4>Write code</h4></li>
                <li><h4>git push tocstack master</h4></li>
                <li><h4>App is online 😃</h4></li>
              </ul>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <img src="../../assets/demo3.png" className="image-box" />
            </Row>
          </Grid>
        </div>

        <div>
          <hr style={{ borderColor: "#d8d7d7", width: "60%" }} />
          <Grid style={{ width: "60%", marginTop: 0 }}>
            <Row>
              <h1 style={{ color: "#ff5722", fontWeight: "lighter", textAlign: "center", fontSize: "3em", }}> tocstack CLI</h1>
            </Row>
            <Row>
              <p style={{ textAlign: "left" }}>Easy to use cli to keep eye on your deployed apps .Enter <span>tocstack</span> to get started</p>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <img src="../../assets/cli1.png" style={{ height: "80%", width: "80%" }} className="image-box" />
            </Row>
          </Grid>
        </div>

        <div>
          <hr style={{ borderColor: "#d8d7d7", width: "60%" }} />
          <Grid style={{ width: "60%", marginTop: 0 }}>
            <Row>
              <h1 style={{ color: "#ff5722", fontWeight: "lighter", textAlign: "center", fontSize: "3em", }}>Open Source</h1>
            </Row>
            <Row>
              <p style={{ textAlign: "left" }}>We are commited to <span>Open source</span></p>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <img src="../../assets/opensource.png" style={{ height: 150, width: 150 }} />
            </Row>
          </Grid>
        </div>

      </div>
    )
  }
}

export default HomePageContent;
