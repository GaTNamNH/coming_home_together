import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import configureStore from '../redux'
import Head from 'next/head'
import '../styles/styles.scss'

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
                <Head>
                    <script src="http://webrtc.github.io/adapter/adapter-latest.js"></script>
                    <script src="https://cdn.WebRTC-Experiment.com/RecordRTC.js"></script>
                </Head>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withRedux(configureStore)(withReduxSaga(_App))
