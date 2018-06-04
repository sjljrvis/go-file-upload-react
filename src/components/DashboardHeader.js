//from system
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { makeRequest } from '../helper/internet'
import {history} from '../route/history';
import { browserStore } from '../helper/collection'
import * as appAction from '../store/action/appAction';
import * as uploadAction from '../store/action/uploadAction';
import { height } from 'window-size';

import { Grid, Row, Col, Glyphicon, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

class DashboardHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      isLoggedIn: false,
      isLoading:true,
    }
  }
  showDropdownlist = () => {
    let _showList = this.state.showList ? false : true;
    this.setState({ showList: _showList })
  }

  handleLogout = () => {
    this.props.appAction.logout();
  }

  componentDidMount() {
    setTimeout(() => {
      if (browserStore.get("temp") == "GuvfVfOvyyvbaQbyyneOnol") {
        this.setState({ isLoggedIn: true ,isLoading : false})
      }
      else{
        this.setState({ isLoading : false})        
      }
    }, 1000)

  }
  render() {
    const { showList, isLoggedIn ,isLoading} = this.state;
    return (
      <header>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4} >
              <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-start", height: 50 }}>
                <img src="../../assets/rocket.svg" style={{ width: "40px", height: "40px", marginTop: 20, marginRight: 5 }} />
                <h1>tocstack</h1>
              </div>
            </Col>
            <Col xs={8} md={4} >
              <div className="search-box" style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 40, marginTop: 24, paddingLeft: 20 }}>
                <input style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}></input>
                <Glyphicon glyph="search" style={{ paddingTop: 10, paddingRight: 7 }} />
              </div>
            </Col>
            <Col xs={4} md={4}>
              {
                isLoading ?
                <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 50, marginTop: 25 }}>
                 <img src="../../assets/loading-disk.svg" style={{ height: 40, width: 40 }} />
                </div>:   
                isLoggedIn ?
                <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 50, marginTop: 25 }}>
                  {
                    showList ?
                      <div className="hamburger-list">
                        <Glyphicon glyph="remove" style={{ textAlign: "right", margin: 2 }} onClick={() => { this.showDropdownlist() }} />
                        <h4 style={{ textAlign: "center", paddingLeft: 10, paddingRight: 10 }}>Profile</h4>
                        <h4 style={{ textAlign: "center", paddingLeft: 10, paddingRight: 10 }}>Settings</h4>
                        <div style={{ textAlign: "center", paddingLeft: 10, paddingRight: 10 }}>
                          <button style={{ textAlign: "center" }} className="navbar-mobile-button "
                            onClick={() => { this.handleLogout() }}
                          >logout</button>
                        </div>
                      </div> : null
                  }
                  <button className="avatar-button" onClick={this.showDropdownlist}><img src="../../assets/sejal.png" style={{ height: 40, width: 40 }} /></button>
                </div>
                :
                <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 50, marginTop: 25 }}>
                  <button style={{ textAlign: "center" }} className="navbar-mobile-button" onClick={() => { history.push("/login") }}>login</button>
                </div>
              }
            </Col >
          </Row>
        </Grid>
        <hr style={{ borderColor: "#d8d7d7" }} />
      </header>
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
})(DashboardHeader);

