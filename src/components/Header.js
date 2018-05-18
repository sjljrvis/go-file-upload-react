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

import { Grid, Row, Col, Glyphicon, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showList: false
    }
  }
  showDropdownlist = () => {
    let _showList = this.state.showList ? false : true;
    this.setState({ showList: _showList })
  }
  componentDidMount() {
  }

  render() {
    const { showList } = this.state;
    return (
      <header>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={8} >
              <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-start", height: 50 }}>
                <img src="../../assets/rocket.svg"  style={{width:"40px",height:"40px",marginTop:20,marginRight:5}}/>
                <h1>tocstack</h1>
              </div>
            </Col>
            <Col xs={6} md={4} className="nav-list">
              <div style={{ display: "flex", flexDirection: " row", justifyContent: "space-evenly", height: 50, marginTop: 30 }}>
                <h4>Blogs</h4>
                <h4>Guide</h4>
                <button className="headerbutton">login</button>
              </div>
            </Col >
            <Col xs={6} md={4} className="nav-mobile">
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", height: 50, marginTop: 20 }}>
                {
                  showList ?
                    <div className="hamburger-list">
                      <h4 style={{ textAlign: "center" }}>Blogs</h4>
                      <h4 style={{ textAlign: "center" }}>Guide</h4>
                      <div style={{ textAlign: "center" }}>
                        <button style={{ textAlign: "center" }} className="navbar-mobile-button ">login</button>
                      </div>
                    </div> : null
                }
                <button className="hamburger-icon">
                  <Glyphicon glyph="menu-hamburger" onClick={this.showDropdownlist} />
                </button>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr style={{ borderColor: "#d8d7d7" }} />
      </header>
    )
  }
}

export default Header;
