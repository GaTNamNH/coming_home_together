import Layout from '../components/layout'
import Head from 'next/head'

const About = () => (
  <Layout>
    <Head>
      <title>About me</title>
    </Head>
    <h1>Batman TV Shows</h1>
    <video width="400" controls>
      <source src="https://mor-dev-assets.s3.amazonaws.com/uploaded-video.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  </Layout>
)

export default About