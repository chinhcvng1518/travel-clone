import React from 'react'
import ImageCarousel from './components/ImageCarousel';
import Destinations from './components//Destinations'
import Footer from './components/Footer';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Search from './components/Search';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Search />
      <Destinations />
      <ImageCarousel />
      <Footer />
    </div>
  );
}

export default App;
