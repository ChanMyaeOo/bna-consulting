import React from 'react'
import useStyles from './styles'

const HeroSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.heroSection}>
                <h2 className={classes.about}>About Us</h2>
        </div>
    )
}

export default HeroSection
