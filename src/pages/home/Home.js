import React from 'react'
import HomeCarousel from '../../components/home-carousel/HomeCarousel'
import HomeBox from '../../components/home-box/HomeBox'
import HomeAbout from '../../components/home-about/HomeAbout'

const home = () => {
    return (
        <div>
            <HomeCarousel />
            <HomeBox />
            <HomeAbout />
        </div>
    )
}

export default home
