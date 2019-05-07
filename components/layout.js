import React from 'react'
// import withRedux from 'next-redux-wrapper';
import Header from './header'

const Layout = props => (
    <div>
        <Header />
        {props.children}
    </div>
)

export default Layout
