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
import * as userAction from '../../store/action/userAction';
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
      user: {},
      repository: []
    }
  }

  componentDidMount() {
    let { userName } = this.props.match.params;
    this.props.userAction.getUserInfo(userName)
  }

  componentWillReceiveProps(nextProps) {
    let { userInfo } = nextProps.userReducer;
    if (userInfo) {
      let { user, repository } = userInfo;
      this.setState({ user, repository })
    }
  }

  render() {
    let { user, repository } = this.state
    return (
      <div>
        <DashboardHeader />
        <Grid style={{marginBottom:100}}>
          <div style={{ marginLeft: 0 }}>
            <Grid>

              <Col xs={12} sm={12} md={4}>
                <Row>
                  <Col xs={6} sm={6} md={12}>
                    <img src="../../../assets/sejal.png" style={{ height: "40%", width: "40%" }} />
                  </Col>
                  <Col xs={6} sm={6} md={12}>
                    <h3 style={{ marginTop: 0, fontWeight: 500 }}>{user.fullName}</h3>
                    <h4>{user.userName}</h4>
                  </Col>
                  <Col>
                    <h4>{user.description}</h4>
                  </Col>
                </Row>
              </Col>

              <Col xs={12} sm={12} md={8}>
                <Row>
                  <h3>Repositories</h3>

                  <div style={{ marginTop: 40 }}>
                    {
                      repository.map((item, index) => {
                        return (
                          <div key={index}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                              <div>
                                <a><h4><span>{item.repositoryName}</span></h4></a>
                                <h5>{item.language}</h5>
                              </div>
                            </div>
                            <hr style={{ borderColor: "#d8d7d7", width: "90%" }} />
                          </div>
                        )
                      })
                    }
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
  uploadReducer: state.uploadReducer,
  userReducer: state.userReducer
});

const mapDispatchToProps = dispatch => ({
  appAction: bindActionCreators(appAction, dispatch),
  uploadAction: bindActionCreators(uploadAction, dispatch),
  userAction: bindActionCreators(userAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(UserProfileContainer);
