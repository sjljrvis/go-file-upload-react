//from system
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Glyphicon } from 'react-bootstrap';
import {URL_BASE} from '../../helper/constant'
import { history } from '../../route/history';
import DashboardHeader from '../../components/DashboardHeader';
import Footer from '../../components/Footer';



class BlogContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          userName: "Sejal Chougule",
          userInfo: "Creator at tocstack.com",
          date: "6 Jan",
          blogTitle: "How to make your on CI server",
          blogBannerImg: "../../../assets/travisci.png",
          permaLink:  `${URL_BASE}/blog/ci-sever`,
          content: `<p>
                    Prior to using Jenkins, we used well-known Continuous Integration/ Continuous Delivery (CI/CD) 
                    providers such as Travis CI, Bitrise, Circle CI, etc. Unfortunately,
                    using emulators on these platforms always remained a struggle.
                    The main bottleneck is that the standard container instances specs are usually too limited.
                    For instance, none of the aforementioned providers offers x86 emulator to enable hardware acceleration.</p>`
        },
        {
          userName: "Sejal Chougule",
          userInfo: "Creator at tocstack.com",
          date: "6 Jan",
          blogTitle: "How to make your on CI server",
          permaLink:  `${URL_BASE}/blog/ci-sever`,
          blogBannerImg: "https://cdn-images-1.medium.com/max/1000/1*lX-Ognzk3oFDDi4nTAjGcw.png",
          content: `<p>
                    Prior to using Jenkins, we used well-known Continuous Integration/ Continuous Delivery (CI/CD) 
                    providers such as Travis CI, Bitrise, Circle CI, etc. Unfortunately,
                    using emulators on these platforms always remained a struggle.
                    The main bottleneck is that the standard container instances specs are usually too limited.
                    For instance, none of the aforementioned providers offers x86 emulator to enable hardware acceleration.</p>`
        }
      ]
    }
  }

  rawMarkup = (raw) => {
    return { __html: raw }
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
        <div style={{ minHeight: "100vh"}}>
          <Grid style={{marginBottom:50}}>
            <Row>
              {
                this.state.blogs.map((blog, index) => {
                  return (
                    <div className="blog-card" key={index}>
                      <div className="blog-avatar">
                        <img className="blog-avatar-img" src="../../../assets/android.png" />
                        <div className="blog-avatar-user">
                          <h5>{blog.userName}</h5>
                          <h6>{blog.userInfo}</h6>
                          <h6>{blog.date}</h6>
                        </div>
                      </div>
                      <h1 className="blog-card-title">{blog.blogTitle}</h1>
                      <div className="blog-card-banner">
                        <img src={blog.blogBannerImg} />
                      </div>
                      <div dangerouslySetInnerHTML={blog.content.length < 300 ? this.rawMarkup(blog.content) : this.rawMarkup(blog.content.slice(0, 400)+" ......")} >
                      </div>
                      {
                        blog.content.length > 300 ?
                          <div style={{textAlign:"center"}}>
                            <button className="border-button" onClick={() => { console.log(blog.permaLink) }}> ... Read</button>
                          </div>
                          : null
                      }
                      <hr style={{ borderColor: "#d8d7d7", width: "80%" }} />
                    </div>
                  )
                })
              }


            </Row>
          </Grid>

          <div style={{ textAlign: "center" }}>
            <button className="border-button" onClick={() => { console.log(this.state) }}><Glyphicon glyph="menu-left" /> Prev</button>
            <button className="border-button" onClick={() => { console.log(this.state) }}><Glyphicon glyph="menu-right" /> Next</button>
          </div>

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
})(BlogContainer);
