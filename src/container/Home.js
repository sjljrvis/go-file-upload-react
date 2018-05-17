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
          <div style={{ height: "80vh" }}>
            <Grid style={{ marginTop: 40 }}>
              <h1 style={{ color: "#ff5722", fontWeight: "lighter", textAlign: "center", fontSize: "3em" }}>One shot app deployment</h1>
              <br />
              <h4 style={{ fontWeight: "lighter", textAlign: "center", fontSize: "2em" }}> Don’t waste time writing server configuration. #PaaS </h4>
              <br />
              <div style={{ textAlign: "center" }}>
                <button className="heroButton">Sign Up</button>
              </div>
            </Grid>
          </div>

          <div style={{ height: '60vh' }}>
            <hr style={{ borderColor: "#d8d7d7", width: "60%" }} />
            <h1 style={{ color: "#ff5722", fontWeight: "lighter", textAlign: "center", fontSize: "3em" }}>What is tocstack ?</h1>
            <br />
            <h4 style={{ fontWeight: "lighter", textAlign: "center", fontSize: "2em" }}> tocstack is easy to use #PaaS for fast application deployment using git</h4>
            <br />
          </div>

          <div style={{ height: '60vh' }}>
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




        </div>
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
