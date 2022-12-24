import React from 'react';
import { useLayoutEffect } from 'react';

import './css/App.css'
import './css/fonts.css';
import './css/index.scss';

import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
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

          {/* Projects */}
          <Projects />

          {/* my skills */}
          <Skills />

        </div>
      </body>
        
      <footer>

      </footer>
    </div>
  );
}

export default App;
