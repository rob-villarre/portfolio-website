import React from 'react';
import './css/fonts.css';
import './css/index.scss';

import Navbar from './components/navbar'
// flex-grow-1
function App() {
  return (
    <div className=''>
      <header className="App-header">
        <Navbar />
      </header>
      <body className=''>

        {/* Hero */}
        <div className=' min-vh-100 px-4 py-5' id='hero'>
          <div className='py-5'>
            <h1 className='display-5 fw-bold mx-5'>Hello World!</h1>
            <div className='col-lg-6 mx-5'>
              <p className='fs-5 mb-4'>My name is Roberto Villarreal Andrade</p>
              <p className='text-white-50'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        {/* About */}
        <div className=' min-vh-100 px-4 py-5 bg-light' id='hero'>
          <div className='py-5'>
            <h1 className='display-5 fw-bold mx-5'>Hello World!</h1>
            <div className='col-lg-6 mx-5'>
              <p className='fs-5 mb-4'>My name is Roberto Villarreal Andrade</p>
              <p className='text-white-50'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className=' min-vh-100 px-4 py-5 bg-info' id='hero'>
          <div className='py-5'>
            <h1 className='display-5 fw-bold mx-5'>Hello World!</h1>
            <div className='col-lg-6 mx-5'>
              <p className='fs-5 mb-4'>My name is Roberto Villarreal Andrade</p>
              <p className='text-white-50'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
