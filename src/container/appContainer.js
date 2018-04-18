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

import HomeContainer from './homeConatiner';

const propTypes = {
	appReducer: PropTypes.object.isRequired,
	appAction: PropTypes.object.isRequired,
	uploadReducer: PropTypes.object.isRequired,
	uploadAction: PropTypes.object.isRequired
};


class AppContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			error: false,
			auth: true
		}
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<HomeContainer />
				<Switch>
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

const style = {

	input: {
		height: 52,
		minWidth: 350,
		maxWidth: 500,
		width: "auto"
	},

	dialogTest: {
		backgroundColor: "#efefef",//"#00182E",
		height: "100vh",
		width: "100%"
	},
	appContainer1: {
		padding: "5% 0",
		backgroundColor: "#F7F7F7",
		height: "100vh",
	},
	appContainer2: {
		backgroundColor: "#27C093",
		height: "100vh",
	},
	appContainer3: {
		backgroundColor: "#FDA423",
		height: "100vh",
	},
	appContainer4: {
		backgroundColor: "#6947BD",
		height: "100vh",
	},
	sideBar: {
		backgroundColor: "#00182E",
		height: "100vh"
	}
}

AppContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps, null, {
	pure: false
})(AppContainer);
