import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'

import { Link } from 'react-scroll'

import '../style/NavbarStyles.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navlogo'>
                <h2>TRAVEL</h2>
            </div>
            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>Book</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>Views</li></Link>
            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>

        </div>
    )
}

export default Navbar
