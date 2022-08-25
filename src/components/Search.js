import React from 'react'
import '../style/SearchStyles.css'



function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>It's time to start your adventure</h2>
                    <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip. Travel can also include relatively short stays between successive movements, as in the case of tourism.</p>
                    
                </div>

                <div className="right">
                    <form>
                        <div className="input-wrap">
                            <label>Destination</label>
                            
                            <select>
                                <option value="1">Dubai, United Arab Emirates</option>
                                <option value="1">London, United Kingdom</option>
                                <option value="1">Cancún, Mexico</option>
                                <option value="1">Bali, Indonesia</option>
                                <option value="1">Crete, Greece</option>
                                <option value="1">Rome, Italy</option>
                                <option value="1">Cabo San Lucas, Mexico</option>
                                <option value="1">Istanbul, Turkey</option>
                                <option value="1">Paris, France</option>
                                <option value="1">Hurghada, Egypt</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <div className="input-wrap">
                            <label>Price</label>
                            <select>
                                <option value="1">500$</option>
                                <option value="1">1000$</option>
                                <option value="1">1500$</option>
                                <option value="1">2000$</option>
                                <option value="1">2500$</option>
                                <option value="1">3000$</option>
                                <option value="1">3500$</option>
                                <option value="1">4000$</option>
                                <option value="1">4500$</option>
                                <option value="1">5000$</option>
                            </select>
                        </div>
                        <button>Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
