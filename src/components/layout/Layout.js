import React from 'react'
import Header from '../header/Header'
import useStyles from './styles'

const Layout = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.layout}>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout
