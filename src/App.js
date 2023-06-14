import React, {useState, useEffect} from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import NavbarMenu from './components/NavbarMenu';
import Services from './components/Services';
import Loading from './components/Loading';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>

      {loading ? <Loading /> : <>
        <NavbarMenu />
        <Routes basename="/My_Portfolio_React/">
          <Route  exact path='/My_Portfolio_React/' element={<Header />} /> 
          <Route  exact path='/My_Portfolio_React/about' element={<About />} /> 
          <Route  exact path='/My_Portfolio_React/services' element={<Services />} /> 
          <Route  exact path='/My_Portfolio_React/contact' element={<Contact />} /> 
        </Routes>

        <Footer />
      </>
      }
    </>
  );
}

export default App;
