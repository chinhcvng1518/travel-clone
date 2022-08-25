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
        <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                <div>
                    <img src={Paris} alt='/' />
                    {/* <p className="legend">Paris</p> */}
                </div>
                <div>
                    <img src={Crete} alt='/' />
                    {/* <p className="legend">Crete</p> */}
                </div>
                <div>
                    <img src={Rome} alt='/' />
                    {/* <p className="legend">Rome</p> */}
                </div>
                <div>
                    <img src={Cancun} alt='/' />
                    {/* <p className="legend">Cancun</p> */}
                </div>
                <div>
                    <img src={BoraBora} alt='/' />
                    {/* <p className="legend">Maldives 1</p> */}
                </div>
                <div>
                    <img src={BoraBora2} alt='/' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={Maldives} alt='/' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>


    )
}

export default ImageCarousel
