//from system
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appAction from '../../store/action/appAction';
import * as uploadAction from '../../store/action/uploadAction';
import { history } from '../../route/history';

class OauthContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
   
    }
  }
  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <div>
        
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
})(OauthContainer);
