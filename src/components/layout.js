import React from 'react'
/**
 * Components
 */
import Header from './header'
import Footer from './footer'
/**
 * Global style
 */
import './global.css'

const Layout = props => {
    return (
        <>
            <Header/>
            {React.cloneElement(props.children, {...props})}
            <Footer/>
        </>
    )
}

export default Layout
