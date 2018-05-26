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
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import DashboardHeader from '../../components/DashboardHeader'
import Footer from '../../components/Footer'

import UserAccountSettings from './UserAccountSettings'
import Organization from './Organization'

class UserProfileContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: [true, false],
    }
  }


  toggleClass = (i) => {
    let currentState = [false, false];
    currentState[i] = !currentState[i]
    console.log(currentState)
    this.setState({ active: currentState });
  };

  componentDidMount() {
  }

  render() {
    let { active } = this.state;
    return (
      <div>
        <DashboardHeader />
        <Grid>

          <div style={{ marginLeft: 0 }}>
            <Grid>

              <Col xs={12} sm={12} md={4}>
                <Row>
                  <Col xs={6} sm={6} md={12}>
                    <img src="../../../assets/sejal.png" style={{ height: "40%", width: "40%" }} />
                  </Col>
                  <Col xs={6} sm={6} md={12}>
                    <h3 style={{ marginTop: 0, fontWeight: 500 }}>Sejal Chougule</h3>
                    <h4>sjljarvis</h4>
                  </Col>
                  Fullstack Node.js,Vuejs,React developer @digitamizers , at @iosociety , Creator @tocstack.com
                </Row>
              </Col>

              <Col xs={12} sm={12} md={8}>
                <Row>
                  <h3>Repositories</h3>
                  <div style={{ marginTop: 40 }}>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                      <div>
                        <a><h4><span>golangapi</span></h4></a>
                        <h5>nodeJS</h5>
                      </div>
                    </div>
                    <hr style={{ borderColor: "#d8d7d7", width: "90%" }} />

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                      <div>
                        <a><h4><span>Epic</span></h4></a>
                        <h5>nodeJS</h5>
                      </div>
                    </div>
                    <hr style={{ borderColor: "#d8d7d7", width: "90%" }} />

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                      <div>
                        <a><h4><span>test</span></h4></a>
                        <h5>nodeJS</h5>
                      </div>
                    </div>
                    <hr style={{ borderColor: "#d8d7d7", width: "90%" }} />

                  </div>
                </Row>
              </Col>


            </Grid>
          </div>

        </Grid>

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
})(UserProfileContainer);
