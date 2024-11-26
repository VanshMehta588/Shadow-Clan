import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js'
import Footer from './components/Footer.js';

function App() {
  const [mode, setMode] = useState('light')

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) => {
    removeBodyClasses()
    document.body.classList.add('bg-' + cls)
    if (mode === cls) {
      setMode(cls);
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="ShadowClan" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        <div className='mt-0 mb-0'>
          <div className="container pt-3 pb-3">
            <Routes>
              <Route exact path="/" element={<TextForm heading="Enter the Text to Analyze Below" mode={mode} />} />
              <Route exact path="/about" element={<About />} />
              {/* <Route path="/">
                <TextForm heading="Enter the Text to Analyze Below" mode={mode} />
              </Route>
              <Route path="/about">
                <About />
              </Route> */}
            </Routes>
            {/* <About /> */}
          </div>
        </div>
        <Footer />
      </Router>

    </>
  );
}




export default App;
