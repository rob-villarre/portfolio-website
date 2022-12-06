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
      <body className='container-fluid bg flex-grow-1 d-flex flex-column justify-content-evenly align-items-start body-bg text-light'>
        <div className=''>
          <strong>Hello Wolrd!</strong><br/>this is a test
        </div>
        <div className=''>
          <strong>Hello Wolrd!</strong><br/>under maintenance
        </div>
      </body>
      
      <footer>

      </footer>
    </div>
  );
}

export default App;
