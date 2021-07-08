import React from 'react'
import HomeCarousel from '../../components/home-carousel/HomeCarousel'
import HomeBox from '../../components/home-box/HomeBox'
import HomeAbout from '../../components/home-about/HomeAbout'
import HomeService from '../../components/home-service/HomeService'

const home = () => {
    return (
        <div>
            <HomeCarousel />
            <HomeBox />
            <HomeAbout />
            <HomeService />
        </div>
    )
}

export default home
