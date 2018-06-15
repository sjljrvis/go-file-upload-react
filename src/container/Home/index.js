//from system
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appAction from '../../store/action/appAction';
import * as uploadAction from '../../store/action/uploadAction';
import { history } from '../../route/history';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomePageContent from '../../components/HomePageContent'
class HomeContainer extends Component {

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
        <Header key={1} />
        <HomePageContent />
        <Footer />
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
})(HomeContainer);
