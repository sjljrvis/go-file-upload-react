//from system
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeRequest } from '../../helper/internet'
import { browserStore } from '../../helper/collection'
import * as appAction from '../../store/action/appAction';
import * as uploadAction from '../../store/action/uploadAction';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

class UserAccountSettingsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      s3Api: "abcssda-d1124123csd-1213124dsfg",
      showS3Api: false
    }
  }

  toggleClass = (i) => {
    let currentState = [false, false, false, false];
    currentState[i] = !currentState[i]
    this.setState({ active: currentState });
  };

  componentDidMount() {
    let userName = browserStore.get("userName");
    let email = browserStore.get("email");
    this.setState({ userName, email });
  }

  render() {
    let { userName, email,showS3Api,s3Api } = this.state;
    return (
      <Grid>
        <Row>
          <Col sm={12} md={4}>
            <h4 style={{ color: "#ff5722", fontWeight: 400 }}>Profile </h4>
          </Col>

          <Col sm={12} md={8}>
            <h5 style={{ fontWeight: "bolder" }}>Username</h5>
            <pre style={{ fontWeight: "bolder" }}>{userName}</pre>

            <h5 style={{ fontWeight: "bolder" }}>Email</h5>
            <pre style={{ fontWeight: "bolder" }}>{email}</pre>
          </Col>
        </Row>

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
                  onChange={(e) => { this.setState({ email: e.target.value }) }}
                ></input>
              </div>

              <h5 style={{ fontWeight: "bolder" }}>New Password</h5>
              <div className="search-box" style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 40, marginTop: 5, marginBottom: 5, paddingLeft: 20 }}>
                <input placeholder="New Password" style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}
                  onChange={(e) => { this.setState({ email: e.target.value }) }}
                ></input>
              </div>

              <h5 style={{ fontWeight: "bolder" }}>Confirm new Password</h5>
              <div className="search-box" style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 40, marginTop: 5, marginBottom: 5, paddingLeft: 20 }}>
                <input placeholder="Confirm Password" style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}
                  onChange={(e) => { this.setState({ email: e.target.value }) }}
                ></input>
              </div>

              <button className="border-button-green border-button" >Update</button>
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
                showS3Api ? s3Api : "********************************"
              }</pre>
            </Col>

            <Col sm={12} md={4}>
              <button className="border-button" onClick={()=>{this.setState({showS3Api:showS3Api?false:true})}}>Show</button>
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

      </Grid>
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
})(UserAccountSettingsContainer);
