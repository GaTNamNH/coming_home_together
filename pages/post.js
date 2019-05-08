import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import Layout from '../components/layout'
import AuthsActions from '../redux/auths-redux'
import { instanceOf } from 'prop-types'
import { Cookies } from 'react-cookie'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static async getInitialProps({isServer, store, req}) {
    if (isServer) {
      console.log(req.cookies);
    }
    let data = {
      subject: "string",
      content: "string",
      timer: "10:30",
      category: {
        title: "string"
      },
      tags: [
        "string"
      ]
    }
    store.dispatch(AuthsActions.loginRequest(data))
  }

  setToken = () => {
    let { cookies } = this.props
    cookies.set('token', 'abcxyz1236545', {path: '/', httpOnly: true})
  }

  render() {
    return (
      <Layout>
        <h1>{this.props.router.query.title}</h1>
        <h1>{this.props.data.data}</h1>
        <p>This is the blog post content.</p>
        <button onClick={this.setToken}>show cookies</button>
      </Layout>
    )
  }
}

Post.propTypes = {
  cookies: instanceOf(Cookies).isRequired,
  history: PropTypes.object,
  login: PropTypes.func,
  processing: PropTypes.bool,
  data: PropTypes.object,
  shows: PropTypes.array
}

const mapStateToProps = state => {
  return {
    processing: state.auths.processing,
    data: state.auths.data
  }
}

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(AuthsActions.loginRequest(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Post))
