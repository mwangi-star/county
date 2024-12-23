import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Branches from './pages/Branches';
import Footer from './components/Footer';
import Courses from './pages/Courses';
import Cambridge from './pages/Cambridge';

function App() {
  return (
    <div>
      <Navbar />  
      <Routes>
        <Route path="/Home" element={<MainSection/>} />
        <Route path="/about" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path='/branches' element={<Branches/>}/>
        <Route  path='/courses' element={<Courses/>}/>
        <Route  path='/Cambridge' element={<Cambridge/>}/>
        <Route path="*" element={<MainSection />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
