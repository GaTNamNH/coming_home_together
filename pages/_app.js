import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import configureStore from '../redux'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'

class _App extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }

    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} cookies={this.props.cookies} />
                </Provider>
            </Container>
        )
    }
}

_App.propTypes = {
    cookies: instanceOf(Cookies).isRequired
}

export default withRedux(configureStore)(withReduxSaga(withCookies(_App)))
