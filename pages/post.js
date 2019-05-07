import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import Layout from '../components/layout'
import AuthsActions from '../redux/auths-redux'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static async getInitialProps({store}) {
    let data = { username: 'admin', password: 'abc12345' }
    store.dispatch(AuthsActions.loginRequest(data))
  }

  render() {
    return (
      <Layout>
        <h1>{this.props.router.query.title}</h1>
        <h1>{this.props.data.title}</h1>
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
