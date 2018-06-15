//from system
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeRequest } from '../../helper/internet'
import { browserStore } from '../../helper/collection'
import * as appAction from '../../store/action/appAction';
import * as uploadAction from '../../store/action/uploadAction';
import * as userAction from '../../store/action/userAction';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';


const propTypes = {
  user: PropTypes.object.isRequired,
}
class UserAccountSettingsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showS3Api: false,
      user: null,
      upDatePassword: {
        userName: null,
        oldPassword: null,
        password: null,
        confirmPassword: null
      }
    }
  }

  handleUpdatePassword = () => {
    try {
      let { upDatePassword, user } = this.state;
      if (upDatePassword.password == upDatePassword.confirmPassword) {
        Object.assign(upDatePassword, { userName: user.userName });
        this.props.userAction.updateUserPassword(upDatePassword)
      }
      else {
        throw new Error("Confirm password did not match")
      }
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount() { }

  componentWillReceiveProps(nextProps) {
    let { userInfo } = nextProps.userReducer;
    if (userInfo) {
      let { user } = userInfo;
      this.setState({ user })
    }
  }

  render() {
    let { user, showS3Api, upDatePassword } = this.state;
    return (
      <div style={{ minHeight: "100vh" }}>
        {
          user ?
            <Grid>
              < Row >
                <Col sm={12} md={4}>
                  <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Profile </h4>
                </Col>

                <Col sm={12} md={8}>
                  <h5 style={{ fontWeight: "bolder" }}>Username</h5>
                  <pre style={{ fontWeight: "bolder" }}>{user.userName}</pre>

                  <h5 style={{ fontWeight: "bolder" }}>Email</h5>
                  <pre style={{ fontWeight: "bolder" }}>{user.email}</pre>
                </Col>
              </Row >

              <hr style={{ borderColor: "#d8d7d7" }} />

              <Row>
                <Col sm={12} md={4}>
                  <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Password</h4>
                </Col>

                <Col sm={12} md={8}>
                  <div style={{ width: 320 }}>
                    <h5 style={{ fontWeight: "bolder" }}>Current Password</h5>
                    <div className="search-box" style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 40, marginTop: 5, marginBottom: 5, paddingLeft: 20 }}>
                      <input placeholder="Current Password" style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}
                        onChange={(e) => {
                          Object.assign(upDatePassword, { oldPassword: e.target.value })
                        }}
                      ></input>
                    </div>

                    <h5 style={{ fontWeight: "bolder" }}>New Password</h5>
                    <div className="search-box" style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 40, marginTop: 5, marginBottom: 5, paddingLeft: 20 }}>
                      <input placeholder="New Password" style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}
                        onChange={(e) => {
                          Object.assign(upDatePassword, { password: e.target.value })
                        }}
                      ></input>
                    </div>

                    <h5 style={{ fontWeight: "bolder" }}>Confirm new Password</h5>
                    <div className="search-box" style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 40, marginTop: 5, marginBottom: 5, paddingLeft: 20 }}>
                      <input placeholder="Confirm Password" style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}
                        onChange={(e) => {
                          Object.assign(upDatePassword, { confirmPassword: e.target.value })
                        }}
                      ></input>
                    </div>

                    <button className="border-button-green border-button" onClick={() => { this.handleUpdatePassword() }}>Update</button>
                  </div>
                </Col>
              </Row>


              <hr style={{ borderColor: "#d8d7d7" }} />
              <Row>
                <Col sm={12} md={4}>
                  <h4 style={{ color: "#ff5722", fontWeight: 400 }}>S3 API key</h4>
                </Col>

                <Col sm={12} md={8}>
                  <Col sm={12} md={8}>
                    <pre>{
                      showS3Api ? user.s3Token : "********************************"
                    }</pre>
                  </Col>

                  <Col sm={12} md={4}>
                    <button className="border-button" onClick={() => { this.setState({ showS3Api: showS3Api ? false : true }) }}>Show</button>
                  </Col>
                  <Col sm={12} md={12}>
                    <button className="border-button" >Regenerate new key</button>
                  </Col>

                </Col>
              </Row>

              <hr style={{ borderColor: "#d8d7d7" }} />
              <Row>
                <Col sm={12} md={4}>
                  <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Close Account</h4>
                </Col>

                <Col sm={12} md={8}>
                  <button className="normal-button-red border-button" onClick={() => { this.handleDelete() }} >Delete</button>
                </Col>
              </Row>

            </Grid > :
            <div style={{ height: "100vh", textAlign: "center", padding: "10% 0" }}>
              <div style={{ padding: "5% 0", textAlign: "center" }}>
                < img src="../../../assets/loading.gif" style={{ width: "10%", height: "10%" }} />
              </div>
            </div>
        }
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
})(UserAccountSettingsContainer);
