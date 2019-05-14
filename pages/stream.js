import React, { Component } from 'react'
import Layout from '../components/layout'
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
            recorderType: MediaStreamRecorder
        })
        this.recorder.startRecording()
    }

    stopRecording = () => {
        this.recorder.stopRecording(() => {
            let blob = this.recorder.getBlob()
            console.log(blob)
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
                            width: 200px;
                            height: 200px;
                        }
                    `}
                </style>
            </Layout>
        )
    }
}

export default Stream