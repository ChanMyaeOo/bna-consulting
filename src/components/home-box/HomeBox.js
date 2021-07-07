import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import Icon1 from '../../images/h4-icon1.png'
import Icon2 from '../../images/h4-icon2.png'
import Icon3 from '../../images/h4-icon3.png'

const HomeBox = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.homeBoxWrap}>
            <Grid item className={classes.homeStory} xl={4} lg={4} md={4} sm={4} >
                <div className={classes.storyWrap}>
                    <img src={Icon1} alt="icon" className={classes.icon1} />
                    <h3 className={classes.storyTitle}>Our Story</h3>
                </div>
                <p className={classes.storyContent}>We started as with our few dedicated clients which made us and our business what we are today, that is why we deal every client with complete attention to detail and make sure to convey this message "You are important to Us"</p>
            </Grid>
            <Grid item className={classes.homeApproach} xl={4} lg={4} md={4} sm={4}>
                <div className={classes.approachWrap}>
                <img src={Icon2} alt="icon" className={classes.icon2} />
                <h3 className={classes.approachTitle}>Our Approach</h3>
                </div>
                <p className={classes.approachContent}>It has always been "Our philosophy" and "Our vision." to grow as a company of your own and treat clients in a personalised way where they can speak their own languages like Russian and English.</p>
            </Grid>
            <Grid item className={classes.homeMission} xl={4} lg={4} md={4} sm={4}>
                <div className={classes.missionWrap}>
                <img src={Icon3} alt="icon" className={classes.icon3} />
                <h3 className={classes.missionTitle}>Our Mission</h3>
                </div>
                <p className={classes.missionContent}>With an expert team of English and Russian speaking accountant in London and consultants on hand for all your financial needs, our mission is to offer you peace of mind and the best service possible at a fair price.</p>
            </Grid>
        </Grid>
    )
}

export default HomeBox

