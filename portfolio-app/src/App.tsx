import React from 'react';
import { useEffect } from 'react';

import './css/fonts.css';
import './css/index.scss';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Navbar from './components/navbar'
// flex-grow-1
function App() {
  useEffect(() => {
    gsap.set('.section', {autoAlpha: 0});
    gsap.utils.toArray<HTMLElement>('.section').forEach((elem) => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 20%",
        markers: false,
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto"
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: function () {
          gsap.fromTo(
            elem,
            { y: -100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto"
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        }
      });
    });

  }, [])
  return (
    <div className=''>
      <header className="App-header">
        <Navbar />
      </header>
      <body className=''>

        {/* Hero */}
        <div className='min-vh-100 px-4 py-5' id='hero'>
          <div className='section py-5'>
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
        <div className='min-vh-100 px-4 py-5' id='hero'>
          <div className='section py-5'>
            <h1 className='display-5 fw-bold mx-5'>About Me</h1>
            <div className='col-lg-6 mx-5'>
              <p className='text-white-50'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className='min-vh-100 px-4 py-5' id='hero'>
          <div className='section py-5'>
            <h1 className='display-5 fw-bold mx-5'>Another Section</h1>
            <div className='col-lg-6 mx-5'>
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
