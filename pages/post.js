import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import Layout from '../components/layout'
import AuthsActions from '../redux/auths-redux'
import Head from 'next/head'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static async getInitialProps({ store, req }) {
    //store.dispatch(an action)
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>{this.props.router.query.title}</title>
        </Head>
        <h1>{this.props.router.query.title}</h1>
        <h2>{this.props.data.data}</h2>
        <h2>{this.props.error && this.props.error.detail}</h2>
        <p>This is the blog post content.</p>
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
