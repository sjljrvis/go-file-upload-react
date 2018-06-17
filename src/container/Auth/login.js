//from system
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserStore } from '../../helper/collection'
import * as appAction from '../../store/action/appAction';
import * as uploadAction from '../../store/action/uploadAction';
import { Grid, Row, Col, Glyphicon, Checkbox } from 'react-bootstrap';

import { history } from '../../route/history';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { show } from '../../components/CustomNotification'

class LoginContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      notification: { show: false, type: "success", message: "Success" }
    }
  }

  handleLogin = () => {
    let { email, password } = this.state
    this.props.appAction.login(email, password)
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.appReducer.errMessage == nextProps.appReducer.errMessage &&
      nextProps.appReducer.errMessage != "" &&
      !nextProps.appReducer.isLoggedIn) {
      show("error", nextProps.appReducer.errMessage, 3000);
      setTimeout(() => {
        this.props.appAction.resetLoginError()
      }, 1000)
    }
    else if (nextProps.appReducer.isLoggedIn || (browserStore.get("token") != "")) {
      this.props.history.push('/d')
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div style={{ marginBottom: 20 }}>
          <Grid className="login">
            <Grid>
              <Row>
                <Col md={4} md={8}>
                  <Row>
                    <Col xs={12} sm={12} md={12} style={{ textAlign: "center" }}>
                      <img src="../../assets/landing_new.png" />
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                      <p style={{ marginTop: 10, textAlign: "center" }}>Built for Developers,Join and contibute to our community</p>
                    </Col>
                  </Row>
                </Col>

                <Col sm={12} md={4}>

                  <h2>Login</h2>
                  <div className="border-box">
                    <div className="search-box" style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 40, marginTop: 24, paddingLeft: 20 }}>
                      <Glyphicon glyph="user" style={{ paddingTop: 10, paddingRight: 7 }} />
                      <input placeholder="Email" style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                      ></input>
                    </div>

                    <div className="search-box" style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 40, marginTop: 24, paddingLeft: 20 }}>
                      <Glyphicon glyph="lock" style={{ paddingTop: 10, paddingRight: 7 }} />
                      <input type="password" placeholder="Password" style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}
                        onChange={(e) => { this.setState({ password: e.target.value }) }}
                      ></input>
                    </div>

                    <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-start", height: 40, marginTop: 24, paddingLeft: 20 }}>
                      <Checkbox inline style={{ color: "#666", fontSize: 15 }}> Remember Me</Checkbox>
                      <h5></h5>
                    </div>

                    <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-start", height: 40, marginTop: 24, paddingLeft: 20 }}>
                      <button className="headerbutton" onClick={() => { this.handleLogin() }}>login</button>
                      <h4 style={{ marginTop: 5, marginLeft: 20, marginRight: 20 }}> or </h4>
                      <button className="headerbutton" onClick={() => { history.push("/register") }}>Sign up</button>
                    </div>
                  </div>

                </Col>


              </Row>
            </Grid>
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
})(LoginContainer);
