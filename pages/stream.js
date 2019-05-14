import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import Layout from '../components/layout'
import AuthsActions from '../redux/auths-redux'
import Head from 'next/head'

class Stream extends Component {
    constructor(props) {
        super(props)
        this.stream = null
        this.recorder = null
    }

    componentDidMount() {

        let video = document.getElementById('video')

        navigator.getMedia = navigator.getUserMedia
            || navigator.webkitGetUserMedia
            || navigator.mozGetUserMedia
            || navigator.msGetUserMedia

        //enabling video and audio channels 
        navigator.getMedia({
            video: true,
            audio: true
        }, s => {
            this.stream = s
            video.srcObject = s
            video.play()
        }, err => {
            //webrtc not supported
        })
    }

    startRecording = () => {
        this.recorder = RecordRTC(this.stream, {
            type: 'video',
            mimeType: 'video/mp4',
            recorderType: MediaStreamRecorder
        })
        this.recorder.startRecording()
    }

    stopRecording = () => {
        this.recorder.stopRecording(() => {
            let blob = this.recorder.getBlob()
            let file = new File([blob], 'uploaded-video.mp4')
            let fd = new FormData()
            fd.append('file', file)
            this.props.upload(fd)
        });
    }

    render() {
        return (
            <Layout>
                <Head>
                    <title>Stream</title>
                </Head>
                <h1>Live stream</h1>
                <video id="video" autoPlay></video>
                <button onClick={this.startRecording}>Start record</button>
                <button onClick={this.stopRecording}>Stop</button>
                <style jsx>
                    {`
                        video {
                            width: 300px;
                            height: 200px;
                        }
                    `}
                </style>
            </Layout>
        )
    }
}

Stream.propTypes = {
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
    upload: data => dispatch(AuthsActions.forgotPasswordRequest(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Stream))
