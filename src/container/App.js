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

import Home from './Home';
import Dashboard from './Dashboard'
import Repository from './Repository'
import Login from './login'
import Register from './Register'
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

					<Route exact path="/" component={Home} />
					<Route exact path="/d" component={Dashboard} />
					<Route exact path="/r" component={Repository} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />

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
