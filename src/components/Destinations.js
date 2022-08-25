import React from 'react'
import '../style/DestinationsStyles.css'

import Paris from '../assets/Paris.jpg'
import Maldives from '../assets/maldives.jpg'
import Crete from '../assets/Crete.jpg'
import Rome from '../assets/Rome.jpg'
import Cancun from '../assets/Cancun.jpg'
import BoraBora from '../assets/borabora.jpg'


import SelectsImg from '../components/SelectsImg'
function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>DESTINATION</h1>
                <p>Explore Top Destinations</p>
                <div name='views' className='selects'>
                    <div className='container'>
                        <SelectsImg bgImg={Paris} text='Paris' />
                        <SelectsImg bgImg={Crete} text='Crete' />
                        <SelectsImg bgImg={Maldives} text='Maldives' />
                        <SelectsImg bgImg={Rome} text='Rome' />
                        <SelectsImg bgImg={Cancun} text='Cancun' />
                        <SelectsImg bgImg={BoraBora} text='BoraBora' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Destinations
