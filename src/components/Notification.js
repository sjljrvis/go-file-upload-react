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
      type:{
        warning : "warning-sign",
        success : "ok",
        error : "ban-circle"
      },
      show : false
    }
  }

  componentDidMount() {
    
  }

  render() {
    const {type,message,show} = this.props;
    return (
      <div style={{ zIndex: 9999 }}>
        <div style={{ opacity:1,  width: 270, minHeight: 60, backgroundColor: "#404044", float: "right", zIndex: 9999, position: "fixed", top: 10, right: 30 }}>
          {/* <span style={{float:"right",marginTop:4,marginRight:4}}><Glyphicon glyph="remove" /></span> */}
          <div style={{ display: "flex", flexDirection: "row", verticalAlign: "middle", marginTop: 14, padding: 5 }}>
            <span><Glyphicon glyph={this.state.type[type]} /></span>
            <p style={{ color: "#f1f1f1", fontSize: 15, fontWeight: 300, marginLeft: 10 }}>{message}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Notification;
