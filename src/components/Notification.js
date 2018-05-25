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

class Notification extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    console.log("bello")
  }

  render() {
    return (
      <div style={{ zIndex: 9999 }}>
        <div style={{ opacity:0.5,  width: 270, minHeight: 60, backgroundColor: "#222", float: "right", zIndex: 9999, position: "fixed", top: 10, right: 30 }}>
          <span style={{float:"right",marginTop:4,marginRight:4}}><Glyphicon glyph="refresh" /></span>
          <div style={{ display: "flex", flexDirection: "row", verticalAlign: "middle", marginTop: 14, padding: 5 }}>
            <span><Glyphicon glyph="refresh" /></span>
            <p style={{ color: "#f1f1f1", fontSize: 15, fontWeight: 300, marginLeft: 10 }}>Job added to Queue</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Notification;
