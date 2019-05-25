import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import Layout from '../components/layout'
import AuthsActions from '../redux/auths-redux'
import FacebookLogin from 'react-facebook-login'
import Head from 'next/head'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    responseFacebook = response => {
        this.props.login({
            access_token: response.accessToken
        })
    }

    login = () => {
        this.props.login({
            username: 'admin',
            password: '12345678@'
        })
    }

    render() {
        return (
            <Layout>
                <Head>
                    <title>Login</title>
                </Head>
                <FacebookLogin
                    appId="607955789722350"
                    isMobile={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    redirectUri="http://localhost:4000"
                />
                <button onClick={this.login}>login</button>
            </Layout>
        )
    }
}

Login.propTypes = {
    history: PropTypes.object,
    login: PropTypes.func,
    processing: PropTypes.bool,
    data: PropTypes.object,
    error: PropTypes.object
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
)(withRouter(Login))
