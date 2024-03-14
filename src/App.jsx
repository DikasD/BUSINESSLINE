import React,{useEffect} from "react";
import Header from './component/Header'
import Homepage from './component/Homepage'
import Services from './component/Services'
import Tracking from './component/Tracking'
import Contact from './component/Contact'
import Footer from './component/Footer'
import{ BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() =>{AOS.init();
  },[])
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route exact path='/' element= {<Homepage/>} />
          <Route exact path='/services' element = {<Services/>} />
          <Route exact path='/tracking' element={<Tracking/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App