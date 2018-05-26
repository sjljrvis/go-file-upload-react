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

import Home from './Home/index';
import Dashboard from './Dashboard/index'
import Repository from './Dashboard/Repository'

import Login from './Auth/login'
import Register from './Auth/Register'
import Settings from './User/Settings'
import Profile from './User/Profile'
class AppContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<Switch>

					<Route exact path="/home" component={Home} />
					<Route exact path="/d" component={Dashboard} />
					<Route exact path="/r" component={Repository} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/user/settings" component={Settings} />
					<Route exact path="/" component={Profile} />
					 
				</Switch>
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
})(AppContainer);
