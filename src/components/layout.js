import React from 'react'
/**
 * Components
 */
import Header from './header'

const Layout = props => {
    return (
        <>
            <Header/>
            {React.cloneElement(props.children, {...props})}
        </>
    )
}

export default Layout
