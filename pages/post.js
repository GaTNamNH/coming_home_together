import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import Layout from '../components/layout'
import AuthsActions from '../redux/auths-redux'
import Cookies from 'js-cookie'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static async getInitialProps({store, req}) {
    let data = {
      subject: "string",
      content: "string",
      timer: "10:30",
      category: {
        title: "string"
      },
      tags: [
        "string"
      ],
      server_token: req? req.cookies.token : null
    }
    store.dispatch(AuthsActions.loginRequest(data))
  }

  setToken = () => {
    Cookies.set('token', '1eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Im5hbW5oIiwiZXhwIjoxNTU3MzExMzQ4LCJlbWFpbCI6Im5hbW5oQHlvcG1haWwuY29tIiwib3JpZ19pYXQiOjE1NTczMDA1NDh9.IA3bEb5sxR_KQpRKF4kJo_xMP1Drf_0QR6MKp9Ax_Dc',
      {path: '/'}
    )
  }

  render() {
    return (
      <Layout>
        <h1>{this.props.router.query.title}</h1>
        <h2>{this.props.data.data}</h2>
        <h2>{this.props.error.detail}</h2>
        <p>This is the blog post content.</p>
        <button onClick={this.setToken}>show cookies</button>
      </Layout>
    )
  }
}

Post.propTypes = {
  history: PropTypes.object,
  login: PropTypes.func,
  processing: PropTypes.bool,
  data: PropTypes.object,
  error: PropTypes.object,
  shows: PropTypes.array
}

const mapStateToProps = state => {
  return {
    processing: state.auths.processing,
    data: state.auths.data,
    error: state.auths.error
  }
}

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(AuthsActions.loginRequest(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Post))
