//from system
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appAction from '../../store/action/appAction';
import * as uploadAction from '../../store/action/uploadAction';
import * as userAction from '../../store/action/userAction';
import { Grid, Row, Col } from 'react-bootstrap';
import DashboardHeader from '../../components/DashboardHeader'
import Footer from '../../components/Footer'

import UserAccountSettings from './UserAccountSettings'
import Organization from './Organization'



class UserSettingsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: [true, false]
    }
  }

  toggleClass = (i) => {
    let currentState = [false, false];
    currentState[i] = !currentState[i]
    this.setState({ active: currentState });
  };

  componentDidMount() {
    let { userName } = this.props.match.params;
    this.props.userAction.getUserInfo(userName)
  }
  
  render() {
    let { active } = this.state;
    return (
      <div>
        <DashboardHeader />
        <Grid>
          <div style={{ marginLeft: 20 }}>
            <Grid>
              <Row>
                <div style={{ display: "flex", flexDirection: "row", }}>
                  <div className={this.state.active[0] ? 'nav-bar-div-active' : "nav-bar-div"}
                    onClick={() => { this.toggleClass(0) }}
                  >
                    <h4 style={{ margin: 10 }}>Settings</h4>
                  </div>

                  <div className={this.state.active[1] ? 'nav-bar-div-active' : "nav-bar-div"}
                    onClick={() => { this.toggleClass(1) }}
                  >
                    <h4 style={{ margin: 10 }}>Organisation</h4>
                  </div>
                </div>
              </Row>
            </Grid>
            <hr style={{ borderColor: "#d8d7d7", marginTop: 0 }} />
          </div>
          <Grid>
            <Row>
              {active[0] ?
                <div>
                  <UserAccountSettings />
                </div> : null
              }

              {active[1] ?
                <div>
                  <Organization />
                </div> : null
              }

            </Row>
          </Grid>
        </Grid>
        <footer>
          <Footer />
        </footer>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  appReducer: state.appReducer,
  uploadReducer: state.uploadReducer,
  userReducer: state.userReducer
});

const mapDispatchToProps = dispatch => ({
  appAction: bindActionCreators(appAction, dispatch),
  uploadAction: bindActionCreators(uploadAction, dispatch),
  userAction: bindActionCreators(userAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(UserSettingsContainer);
