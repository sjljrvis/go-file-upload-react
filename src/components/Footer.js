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

import { Grid, Row, Col, Glyphicon, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }

  render() {

    return (
      <div style={{ backgroundColor: "#f1f1f1", marginTop: 10 }}>
        <div style={{ paddingBottom: 20 }}>
          <Grid>
            <Row>
              <Col xs={12} sm={12} md={6} >
                <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-start" }}>
                  <img src="../../assets/rocket.svg" style={{ width: "40px", height: "40px", marginTop: 20, marginRight: 5 }} />
                  <h1>tocstack</h1>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} >
                <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-start" }}>
                  <Grid>
                    <Col xs={12} sm={12} md={4} >
                      <hr style={{ borderColor: "#d8d7d7", width: "90%", borderWidth: 3 }} />
                      <p style={{ fontSize: "1.2em", fontWeight: "bolder", textAlign: "start" }}> &copy;tocstack.com</p>
                      <p style={{ fontSize: "1em", textAlign: "start" }}>Navi Mumbai,India</p>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                        <div style={{ width: 10, height: 10, backgroundColor: "#39aa56", borderRadius: "50%", margin: 5 }}>
                        </div>
                        <p style={{ fontSize: "1em", textAlign: "start" }}>API status</p>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} >
                      <hr style={{ borderColor: "#d8d7d7", width: "90%", borderWidth: 3 }} />
                      <p style={{ fontSize: "1.2em", fontWeight: "bolder", textAlign: "start" }}>Info</p>

                      <p style={{ fontSize: "1em", textAlign: "start" }}>Documentation</p>
                      <p style={{ fontSize: "1em", textAlign: "start" }}>Blog</p>
                      <p style={{ fontSize: "1em", textAlign: "start" }}>Team</p>
                      <p style={{ fontSize: "1em", textAlign: "start" }}>Contribute</p>

                    </Col>
                    <Col xs={12} sm={12} md={4} >
                      <hr style={{ borderColor: "#d8d7d7", width: "90%", borderWidth: 3 }} />
                      <p style={{ fontSize: "1.2em", fontWeight: "bolder", textAlign: "start" }}>Connect</p>
                      <p style={{ fontSize: "1em", textAlign: "start" }}><img src="../../assets/github.svg" style={{ height: 25, width: 25 }} /> Github</p>
                      <p style={{ fontSize: "1em", textAlign: "start" }}><img src="../../assets/twitter.svg" style={{ height: 25, width: 25 }} /> Twitter</p>
                      <p style={{ fontSize: "1em", textAlign: "start" }}><img src="../../assets/close-envelope.svg" style={{ height: 25, width: 25 }} /> Email</p>
                    </Col>
                  </Grid>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>

      </div>

    )
  }
}

export default Footer;
