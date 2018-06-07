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
import * as websocketAction from '../store/action/websocketAction';
import { height } from 'window-size';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';



class Error404Container extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }


  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() {
  }

  render() {

    return (
      <div>
        <DashboardHeader />
        <div style={{ minHeight: "100vh" }}>
          <Grid style={{ marginBottom: 50,marginTop:100 }}>
            <Row>
              <div style={{ textAlign: "center" }}>
                <img src="../../assets/404-error.svg" style={{width:200,height:200}}/>

                <h1 style={{fontWeight:"bolder"}}>Oops !!!</h1>
                <h3 style={{fontWeight:"light"}}>We could'nt find what you looking for</h3>
                
              </div>
            </Row>
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

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Error404Container);
