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
      <body className='bg flex-grow-1 d-flex flex-column text-light'>
        <div className='bg-primary text-secondary px-4 py-5 m-4 text-center rounded' id='hero'>
          <div className='py-5'>
            <h1 className='display-5 fw-bold text-white'>Hello World!</h1>
            <div className='col-lg-6 mx-auto'>
              <p className='fs-5 mb-4 text-white'>My name is Roberto Villarreal Andrade</p>

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
