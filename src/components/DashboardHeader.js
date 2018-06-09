//from system
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { history } from '../route/history';
import { browserStore } from '../helper/collection'
import * as appAction from '../store/action/appAction';
import * as uploadAction from '../store/action/uploadAction';

import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

class DashboardHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      isLoggedIn: false,
      isLoading: true,
      showSearchBar: false,
    }
  }
  handleLogout = () => {
    this.props.appAction.logout();
  }
  showSearchBar = () => {
    let _showSearchBar = this.state.showSearchBar ? false : true;
    this.setState({ showSearchBar: _showSearchBar })
  }

  hideSearchBar = () => {
    this.setState({ showSearchBar: false })
  }


  componentDidMount() {
    setTimeout(() => {
      if (browserStore.get("temp") == "GuvfVfOvyyvbaQbyyneOnol") {
        this.setState({ isLoggedIn: true, isLoading: false })
      }
      else {
        this.setState({ isLoading: false })
      }
    }, 1000)

  }
  render() {
    const { isLoggedIn, isLoading, showSearchBar } = this.state;
    return (
      <header>
        {
          showSearchBar ?
            <div>
              <div className="search-box-mobile" style={{ height: 40, marginTop: 34, paddingLeft: 20, marginLeft: 10, marginRight: 10 }}>
                <Glyphicon glyph="arrow-left" onClick={() => { this.hideSearchBar() }} style={{ paddingTop: 10, paddingRight: 7 }} />
                <input style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}></input>
                <Glyphicon glyph="search" style={{ paddingTop: 10, paddingRight: 7 }} />
              </div>
            </div> : null
        }
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={() => { closeNav() }} >&times;</a>
          <a>
            <div >
              <img style={{ width: "40%", height: "40%", backgroundColor: "#fff", borderRadius: "50%" }} src="../../assets/sejal.png" />
            </div>
          </a>
          <a href="#"><h4>Profile</h4></a>
          <a href="#"><h4>Settings</h4></a>
          <a href="#">  <button style={{ textAlign: "center" }} className="navbar-mobile-button "
            onClick={() => { this.handleLogout() }}
          > <Glyphicon glyph="log-out" style={{ color: "#fff" }} /> &nbsp;logout</button></a>

        </div>
        {
          !showSearchBar ?
            <Grid>
              <Row className="show-grid">
                <Col xs={4} md={4} >
                  <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-start", height: 50,marginTop:6 }}>
                    <img src="../../assets/rocket.svg" style={{ width: "30px", height: "30px", marginTop: 20, marginRight: 5 }}
                      onClick={() => { history.push("/") }}
                    />
                    <h2 style={{ fontWeight: "bolder" }} onClick={() => { history.push("/") }}>tocstack</h2>
                  </div>
                </Col>
                <Col xs={7} md={4} >
                  <div className="search-box" style={{ height: 40, marginTop: 24, paddingLeft: 20 }}>
                    <input style={{ width: "-webkit-fill-available", borderStyle: "unset", outline: "none" }}></input>
                    <Glyphicon glyph="search" style={{ paddingTop: 10, paddingRight: 7 }} />
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <Glyphicon className="search-icon-mobile" onClick={() => { this.showSearchBar() }} glyph="search" />
                  </div>
                </Col>
                <Col xs={1} md={4}>
                  {
                    isLoading ?
                      <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 50, marginTop: 25 }}>
                        <img src="../../assets/loading-disk.svg" style={{ height: 40, width: 40 }} />
                      </div> :
                      isLoggedIn ?
                        <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 50, marginTop: 25 }}>
                          <button className="avatar-button" onClick={() => openNav()}><img src="../../assets/sejal.png" style={{ height: 30, width: 30 }} /></button>
                        </div>
                        :
                        <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-end", height: 50, marginTop: 25 }}>
                          <button style={{ textAlign: "center" }} className="navbar-mobile-button" onClick={() => { history.push("/login") }}>login</button>
                        </div>
                  }
                </Col >
              </Row>
            </Grid> :
            null
        }
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

