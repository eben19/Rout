import React from 'react';
//import Friction from './components/Friction';
//import Aspire from './components/aspire';
import Header from './components/header';
//import Heropage from './components/Hero';
import Slider from './components/slider';
import Home from './components/Routers/Home'
import About from './components/Routers/About'
import Contact from './components/Routers/Contact'
import Pricing from './components/Routers/Pricing'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App(){
  return (
    <div>

      <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
        </Routes>
      </Router>
      

    {/*  <Slider />

      <Heropage />

      < Aspire />

      < Friction /> */}
      </>

    </div>
  
  );
}

export default App;

