import React from 'react'
import useStyles from './styles'

const HeroSection = ({ title }) => {
    const classes = useStyles();
    return (
        <div className={classes.heroSection}>
                <h2 className={classes.about}>{title}</h2>
        </div>
    )
}

export default HeroSection
