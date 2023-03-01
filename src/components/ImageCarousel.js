import React from 'react'
import '../style/ImageCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Paris from '../assets/Paris.jpg'
import Crete from '../assets/Crete.jpg'
import Rome from '../assets/Rome.jpg'
import Cancun from '../assets/Cancun.jpg'

function ImageCarousel() {
    return (
        
        <div name='carousel' className='carousel'>
            <div className='container'>
                <h1>Recommended for you</h1>
                <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                    <div>
                        <img src={Paris} alt='/' />
                    </div>
                    <div>
                        <img src={Crete} alt='/' />
                    </div>
                    <div>
                        <img src={Rome} alt='/' />
                    </div>
                    <div>
                        <img src={Cancun} alt='/' />
                    </div>
                    <div>
                        <img src={BoraBora} alt='/' />
                    </div>
                    <div>
                        <img src={BoraBora2} alt='/' />
                    </div>
                    <div>
                        <img src={Maldives} alt='/' />
                    </div>
                </Carousel>
            </div>
        </div>


    )
}

export default ImageCarousel
