//from system
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../route/history';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showList: false
    }
  }
  showDropdownlist = () => {
    let _showList = this.state.showList ? false : true;
    this.setState({ showList: _showList })
  }
  componentDidMount() {
  }

  render() {
    const { showList } = this.state;
    return (
      <header>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={8} >
              <div style={{ display: "flex", flexDirection: " row", justifyContent: "flex-start", height: 50 }}>
                <img src="../../assets/rocket.svg"  style={{width:"40px",height:"40px",marginTop:20,marginRight:5}}
                 onClick={()=>{history.push("/")}}
                />
                <h1 onClick={()=>{history.push("/")}}>tocstack</h1>
              </div>
            </Col>
            <Col xs={6} md={4} className="nav-list">
              <div style={{ display: "flex", flexDirection: " row", justifyContent: "space-evenly", height: 50, marginTop: 30 }}>
                <h4 onClick={()=>{history.push("/blog/sejal")}}>Blogs</h4>
                <h4>Docs</h4>
                <button className="headerbutton" onClick={()=>{history.push("/login")}}>login</button>
              </div>
            </Col >
            <Col xs={6} md={4} className="nav-mobile">
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", height: 50, marginTop: 20 }}>
                {
                  showList ?
                    <div className="hamburger-list">
                      <h4 style={{ textAlign: "center" }}>Blogs</h4>
                      <h4 style={{ textAlign: "center" }}>Docs</h4>
                      <div style={{ textAlign: "center" }}>
                        <button style={{ textAlign: "center" }} className="navbar-mobile-button"  onClick={()=>{history.push("/login")}}>login</button>
                      </div>
                    </div> : null
                }
                <button className="hamburger-icon">
                  <Glyphicon glyph="menu-hamburger" onClick={this.showDropdownlist} />
                </button>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr style={{ borderColor: "#d8d7d7" }} />
      </header>
    )
  }
}

export default Header;
