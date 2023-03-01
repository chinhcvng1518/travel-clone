import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'

import { Link } from 'react-router-dom'
import '../style/NavbarStyles.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navlogo'>
                <h2>TRAVEL</h2>
            </div>
            <ul className="nav-menu">
                <li>
                    <Link to='/' smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/book' smooth={true} duration={500} >
                        Booking
                    </Link>
                </li>
                <li>
                    <Link to='/travel' smooth={true} duration={500} >
                        Travel
                    </Link>
                </li>
                <li>
                    <Link to='/view' smooth={true} duration={500} >
                        Views
                    </Link>
                </li>
            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>

        </div>
    )
}

export default Navbar
