import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Menu from './components/menu/menu';
import Services from './components/services/services';
import About from './components/about/about';
import Contact from './components/contact/contact';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
       <Route exact path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path='/menu' element={<Menu />} />
      </Routes>
      <Routes>
        <Route exact path='/services' element={<Services />} />
              </Routes>
              <Routes>
                <Route exact path='/about' element={<About />} />
              </Routes>
              <Routes>
                <Route exact path='/contact' element={<Contact />} />
              </Routes>

    </div>
    </BrowserRouter>
   
  );
}

export default App;
