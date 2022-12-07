import React from 'react';
import './css/fonts.css';
import './css/index.scss';

import Navbar from './components/navbar'
// flex-grow-1
function App() {
  return (
    <div className='min-vh-100 d-flex flex-column'>
      <header className="App-header">
        <Navbar />
      </header>
      <body className='bg flex-grow-1 d-flex flex-column'>
        <div className='px-4 py-5' id='hero'>
          <div className='py-5'>
            <h1 className='display-5 fw-bold mx-5'>Hello World!</h1>
            <div className='col-lg-6 mx-5'>
              <p className='fs-5 mb-4'>My name is Roberto Villarreal Andrade</p>
              <p className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
