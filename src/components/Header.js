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

import { Grid, Row, Col, Button } from 'react-bootstrap';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <header>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={8} >
              <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-start", height: 50 }}>
                <h1>tocstack</h1>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div style={{ display: "flex", flexDirection: " row", justifyContent: "space-evenly", height: 50, marginTop: 30 }}>
                <button className="headerbutton">login</button>
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
