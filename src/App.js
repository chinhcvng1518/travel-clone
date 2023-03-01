import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Book from './pages/Book';
import Travel from './pages/Travel';
import View from './pages/View';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<HomePage/>} />
        <Route path='/book' exact element={<Book/>} />
        <Route path='/travel' exact element={<Travel/>} />
        <Route path='/view' exact element={<View/>} />
        <Route path='*' exact element={<Error/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
