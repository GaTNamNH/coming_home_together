import Layout from '../components/layout'
import Head from 'next/head'

const About = () => (
  <Layout>
    <Head>
      <title>About me</title>
    </Head>
    <h1>Batman TV Shows</h1>
    <img src="/static/belle.jpg" />
    <style jsx>
      {`
        img {
          width: 200px;
        }
      `}
    </style>
  </Layout>
)

export default About