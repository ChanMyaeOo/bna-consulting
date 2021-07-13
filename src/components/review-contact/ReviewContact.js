import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const ReviewContact = () => {
    const classes = useStyles();
    return (
        <div className={classes.serviceContact}>
                <h3 className={classes.requestHeader}>Contact Us Now for Quick Advice</h3>
                <Link to="/contact" className={classes.requestBtn}>Request now &gt;</Link>
        </div>
    )
}

export default ReviewContact
