import React from 'react'
import '../style/HeroStyles.css'
import {BsSearch} from 'react-icons/bs'

import Video from '../assets/trailer.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>TOURS & TRAVEL</h1>
                <h2>DISCOVER AMAZING</h2>
                <h2>PLACES WITH US</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><BsSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
