import React from 'react';
import { useLayoutEffect } from 'react';

import './css/App.css'
import './css/fonts.css';
import './css/index.scss';

import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'

// flex-grow-1
function App() {
  useLayoutEffect(() => {    

  }, [])
  return (
    <div>

      <header>
        <Navbar />
      </header>

      <body>

        <div data-bs-spy='scroll' data-bs-target='#navbar' data-bs-offset='0' className='scrollsp'>

          {/* Hero */}
          <Hero />

          {/* About */}
          <About />

          {/* my skills */}
          <Skills />

        {/* Another Section */}
        <section id='projects' className='panel'>
          <div className='panel min-vh-100 px-4 py-5'>
            <div className='section py-5'>
              <h1 className='display-6 fw-bold mx-5'>Projects</h1>
              <div className='col-lg-6 mx-5'>
                <p className='text-white-50'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>
        </div>
        </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
