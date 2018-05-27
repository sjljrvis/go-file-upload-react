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
import AddRepository from './Dashboard/AddRepository'
import Notification from '../components/Notification'
class AppContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			notification: { show: false, type: "success", message: "Success" }
		}
	}

	showNotification = (type, message, duration) => {
		this.setState({ notification: { show: true, type: type, message: message } });
		setTimeout(() => {
			this.setState({ notification: { show: false, type: type, message: message } })
		}, duration)
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Switch>

					<Route exact path="/" component={Home} />
					<Route exact path="/d" component={Dashboard} />
					<Route exact path='/app/:appName' component={Repository} />
					<Route exact path="/login" showNotification={this.showNotification} data={12} component={Login} />
					<Route exact path="/new/app" component={AddRepository} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/user/settings" component={Settings} />
					<Route exact path="/user/:userName" component={Profile} />

				</Switch>
				{
					this.state.notification.show ?
						<Notification type={this.state.notification.type} message={this.state.notification.message} show={this.state.notification.show} />
						: null
				}
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
