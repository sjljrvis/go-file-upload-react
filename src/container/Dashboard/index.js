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
import { Grid, Row, Col } from 'react-bootstrap';

import DashboardHeader from '../../components/DashboardHeader'
import Footer from '../../components/Footer'

class DashboardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <DashboardHeader />
        <div style={{ height: "100vh" }}>
          <Grid>
            <Row style={{}}>
              <Col xs={6} md={6}>
                <div style={{ textAlign: "left" }}>
                  <h3 style={{ marginTop: 5, fontWeight: 700 }}>My Apps</h3>
                </div>
              </Col>
              <Col xs={6} md={6}>
                <div style={{ textAlign: "right" }}>
                  <button className="normal-button">New App</button>
                </div>
              </Col>
            </Row>

            <div style={{ marginTop: 100 }}>
              <Grid>
                <Row>
                  <Col xs={6} md={6}>
                    <div style={{ textAlign: "left" }}>
                      <h4 style={{}}>App name</h4>
                    </div>
                  </Col>
                  <Col xs={6} md={6}>
                    <div style={{ textAlign: "right" }}>
                      <h4 style={{}}>nodeJS</h4>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <hr style={{ borderColor: "#d8d7d7" }} />
                </Row>
              </Grid>

              <Grid>
                <Row>
                  <Col xs={6} md={6}>
                    <div style={{ textAlign: "left" }}>
                      <h4 style={{}}>App name</h4>
                    </div>
                  </Col>
                  <Col xs={6} md={6}>
                    <div style={{ textAlign: "right" }}>
                      <h4 style={{}}>nodeJS</h4>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <hr style={{ borderColor: "#d8d7d7" }} />
                </Row>
              </Grid>


              <Grid>
                <Row>
                  <Col xs={6} md={6}>
                    <div style={{ textAlign: "left" }}>
                      <h4 style={{}}>App name</h4>
                    </div>
                  </Col>
                  <Col xs={6} md={6}>
                    <div style={{ textAlign: "right" }}>
                      <h4 style={{}}>nodeJS</h4>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <hr style={{ borderColor: "#d8d7d7" }} />
                </Row>
              </Grid>


              <Grid>
                <Row>
                  <Col xs={6} md={6}>
                    <div style={{ textAlign: "left" }}>
                      <h4 style={{}}>App name</h4>
                    </div>
                  </Col>
                  <Col xs={6} md={6}>
                    <div style={{ textAlign: "right" }}>
                      <h4 style={{}}>nodeJS</h4>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <hr style={{ borderColor: "#d8d7d7" }} />
                </Row>
              </Grid>


              <Grid>
                <Row>
                  <Col xs={6} md={6}>
                    <div style={{ textAlign: "left" }}>
                      <h4 style={{}}>App name</h4>
                    </div>
                  </Col>
                  <Col xs={6} md={6}>
                    <div style={{ textAlign: "right" }}>
                      <h4 style={{}}>nodeJS</h4>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <hr style={{ borderColor: "#d8d7d7" }} />
                </Row>
              </Grid>

            </div>

          </Grid>
        </div>
        <footer>
          <Footer />
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
})(DashboardContainer);
