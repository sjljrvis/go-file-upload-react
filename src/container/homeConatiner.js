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

import { Jumbotron, Button, Glyphicon } from 'react-bootstrap';

const propTypes = {
  appReducer: PropTypes.object.isRequired,
  appAction: PropTypes.object.isRequired,
  uploadReducer: PropTypes.object.isRequired,
  uploadAction: PropTypes.object.isRequired
};


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
        <div style={style.appContainer1}>
          <h1 style={{ textAlign: "center" }}>File upload and search service</h1>
          <div style={{ padding: "10% 0", marginLeft: "auto", marginRight: "auto", width: "80%", textAlign: "center" }}>
            <input style={style.input} type="text" placeholder="Search.." />
            <button style={{ background: "#7BC9F7", color: "#FFFFFF", height: 52,width:50 ,border: 0, boxShadow: "none", borderRadius: 0 }}>Go</button>
          </div>
        </div>
        <div style={style.appContainer2}>
          <br />
          <h1 style={{ textAlign: "center", fontWeight: "bold", paddingTop: 35 }}>We don’t store your <br />personal information.Ever</h1>
          <img style={{ width: 215, height: 185, textAlign: "center" }} src="./assets/owl.png" />
        </div>
        <div style={style.appContainer3}>
        </div>
        <div style={style.appContainer4}>
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

const style = {

  input: {
    height: 52,
    minWidth: 350,
    maxWidth: 500,
    width: "auto",
    padding:5
  },

  dialogTest: {
    backgroundColor: "#efefef",//"#00182E",
    height: "100vh",
    width: "100%"
  },
  appContainer1: {
    padding: "5% 0",
    backgroundColor: "#F7F7F7",
    height: "100vh",
  },
  appContainer2: {
    backgroundColor: "#27C093",
    height: "100vh",
    color: "#FFFFFF"
  },
  appContainer3: {
    backgroundColor: "#FDA423",
    height: "100vh",
  },
  appContainer4: {
    backgroundColor: "#6947BD",
    height: "100vh",
  },
  sideBar: {
    backgroundColor: "#00182E",
    height: "100vh"
  }
}

HomeContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(HomeContainer);
