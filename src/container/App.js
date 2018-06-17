//from system
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import * as appAction from '../store/action/appAction';
import * as uploadAction from '../store/action/uploadAction';


import Home from './Home/index';
import Dashboard from './Dashboard/index'
import Repository from './Dashboard/Repository'

import Blog from './Blogs'
import Login from './Auth/login'
import Register from './Auth/Register'
import Oauth from './Auth/Oauth'
import Settings from './User/Settings'
import Profile from './User/Profile'
import AddRepository from './Dashboard/AddRepository'
import Error404Container from './404'
class AppContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			notification: { show: false, type: "success", message: "Success" }
		}
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
					<Route exact path="/login" data={12} component={Login} />
					<Route exact path="/new/app" component={AddRepository} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/settings/:userName" component={Settings} />
					<Route exact path="/user/:userName" component={Profile} />
					<Route exact path="/blog/:permaLink" component={Blog} />
					<Route exact path="/oauth" component={Oauth} />
					<Route  component={Error404Container} />
					
					

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
