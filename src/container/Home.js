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
import { Grid, Row, Col } from 'react-bootstrap';

import Header from '../components/Header'

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: false,
      auth: true
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Header key={1} />
        <div style={{ marginLeft: 10, marginRight: 10 }}>
          <div>
            <Grid style={{ marginTop: 50 }}>
              <h1 style={{ color: "#ff5722", fontWeight: "lighter", textAlign: "center", fontSize: "3em" }}>One shot app deployment</h1>
              <br />
              <h4 style={{ fontWeight: "lighter", textAlign: "center", fontSize: "2em" }}> Don’t waste time writing server configuration. #PaaS </h4>
              <br />
              <div style={{ textAlign: "center" }}>
                <button className="heroButton">Sign Up</button>
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

          <div style={{}}>
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

          <div>
            <hr style={{ borderColor: "#d8d7d7", width: "60%" }} />
            <h1 style={{ color: "#ff5722", fontWeight: "lighter", textAlign: "center", fontSize: "3em" }}>Quick Demo</h1>
            <Grid style={{ width: "60%", marginTop: 0 }}>
              <Row>
                <h4 style={{ fontWeight: "lighter", textAlign: "center", fontSize: "2em" }}>1 . Create new App</h4>
              </Row>
              <Row style={{ textAlign: "center" }}>
                <div className="image-box">
                  <img src="../../assets/demo1.png" style={{ height: "80%", width: "80%" }} />
                </div>
              </Row>
            </Grid>
          </div>




        </div>
        <footer>
          <div style={{ backgroundColor: "#f1f1f1", marginTop: 10, height: "40vh" }}>
            <Grid>
              <Row>
                <Col xs={12} sm={12} md={6} >
                  <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-start", height: 50 }}>
                    <img src="../../assets/rocket.svg" style={{ width: "40px", height: "40px", marginTop: 20, marginRight: 5 }} />
                    <h1>tocstack</h1>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6} >
                  <div style={{ display: "flex", flexDirection: " row", justifyContent: "center", height: 50 }}>
                    <img src="../../assets/rocket.svg" style={{ width: "40px", height: "40px", marginTop: 20, marginRight: 5 }} />
                    <h1>tocstack</h1>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </footer>
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
})(HomeContainer);
