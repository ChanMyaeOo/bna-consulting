import React from 'react'
import HomeCarousel from '../../components/home-carousel/HomeCarousel'
import HomeBox from '../../components/home-box/HomeBox'
import HomeAbout from '../../components/home-about/HomeAbout'
import HomeService from '../../components/home-service/HomeService'
import Testimonials from '../../components/testimonials/Testimonials'
import MapContact from '../../components/map-contact/MapContact'
import HomeVendor from '../../components/home-vendor/HomeVendor'

const home = () => {
    return (
        <div>
            <HomeCarousel />
            <HomeBox />
            <HomeAbout />
            <HomeService />
            <Testimonials />
            <MapContact />
            <HomeVendor />
        </div>
    )
}

export default home
