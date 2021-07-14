import React from 'react'
import useStyles from './styles'
import Vendor1 from '../../images/vendor1.png'
import Vendor2 from '../../images/vendor2.png'
import Vendor3 from '../../images/vendor3.png'


const HomeVendor = () => {
    const classes = useStyles();
    return (
        <div className={classes.homeVendor}>
            <div className={classes.vendorWrap}>
                <img src={Vendor1} alt="logo" />
                <img src={Vendor2} alt="logo" />
                <img src={Vendor3} alt="logo" />
            </div>
        </div>
    )
}

export default HomeVendor
