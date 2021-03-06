//from system
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appAction from '../../store/action/appAction';
import * as uploadAction from '../../store/action/uploadAction';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import { history } from '../../route/history';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class RegirsterContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  handleRegister = () => {
    let { userName, fullName, email, password, confirmPassword } = this.state;
    const payload = { userName, fullName, email, password, confirmPassword } ;
    this.props.appAction.register(payload)
  }

  componentDidMount() {
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

                  <h2>Sign up</h2>
                  <div className="border-box">
                    <div className="search-box" style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 40, marginTop: 24, paddingLeft: 20 }}>
                      <Glyphicon glyph="user" style={{ paddingTop: 10, paddingRight: 7 }} />
                      <input placeholder="UserName" style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}
                        onChange={(e) => { this.setState({ userName: e.target.value }) }}
                      ></input>
                    </div>

                    <div className="search-box" style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 40, marginTop: 24, paddingLeft: 20 }}>
                      <Glyphicon glyph="user" style={{ paddingTop: 10, paddingRight: 7 }} />
                      <input placeholder="Full Name" style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}
                        onChange={(e) => { this.setState({ fullName: e.target.value }) }}
                      ></input>
                    </div>

                    <div className="search-box" style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 40, marginTop: 24, paddingLeft: 20 }}>
                      <Glyphicon glyph="envelope" style={{ paddingTop: 10, paddingRight: 7 }} />
                      <input placeholder="Email" style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                      ></input>
                    </div>

                    <div className="search-box" style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 40, marginTop: 24, paddingLeft: 20 }}>
                      <input type="password" placeholder="Password" style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}
                        onChange={(e) => { this.setState({ password: e.target.value }) }}
                      ></input>
                    </div>

                    <div className="search-box" style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 40, marginTop: 24, paddingLeft: 20 }}>
                      <input type="password" placeholder="Confirm Password" style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}
                        onChange={(e) => { this.setState({ confirmPassword: e.target.value }) }}
                      ></input>
                    </div>


                    <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-start", height: 40, marginTop: 24, paddingLeft: 20 }}>
                      <button className="headerbutton" onClick={() => { this.handleRegister() }}>Submit</button>
                      <h4 style={{ marginTop: 5, marginLeft: 20, marginRight: 20 }}> or </h4>
                      <button className="headerbutton" onClick={() => { history.push('/login') }}>Login</button>
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
})(RegirsterContainer);
