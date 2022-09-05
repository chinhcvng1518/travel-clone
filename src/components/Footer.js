import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'
import '../style/FooterStyles.css'
const Footer = () => {
  return (
    <div className='footer'>
            <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
            </div>
            <div className='container'>
                <div className='col'>
                    <h3>Quick Links</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>Destinations</p>
                    <p>Services</p>
                </div>
                <div className='col'>
                    <h3>Information</h3>
                    <p>Ho Chi Minh city</p>
                    <p>+8412345678</p>
                    <p>chinhcvng1518@gmail.com</p>
                    <p>7:00am - 7:00pm</p>
                </div>
                <div className='col'>
                    <h3>Legal</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>

            </div>
        </div>
  )
}

export default Footer