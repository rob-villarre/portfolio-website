import React from 'react';
import { useLayoutEffect } from 'react';

import './css/App.css'
import './css/fonts.css';
import './css/index.scss';

import gsap from 'gsap';
import { ScrollTrigger, SteppedEase, TextPlugin } from 'gsap/all';

import Navbar from './components/navbar'
// flex-grow-1
function App() {
  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(SteppedEase);

    gsap.fromTo('#cursor', {autoAlpha: 0, x:-10}, {autoAlpha: 1, duration: 1, repeat: -1, ease: SteppedEase.config(1)});
    gsap.to("#text", {text: {value: "Hello World!"}, duration: 2, delay: 0, ease: "none"})
    

  }, [])
  return (
    <div className=''>
      <header className="App-header">
        <Navbar />
      </header>
      <body className=''>

        {/* Hero */}
        <section id='hero'>
          <div className='min-vh-100 px-sm-4 py-5 my-5'>
            <div className='section container-fluid py-5'>
              {/*Hello World Message*/}
              <h1 className='display-6 fw-bold mx-5'><span id='text'></span><span id="cursor">|</span></h1>
              {/*Info*/}
              <div className='col-lg-6 mx-5'>
                <h2 className='fs-2 mb-4'>I'm Roberto Villarreal Andrade,</h2>
                <h3 className='fs-3 text-white-50'>
                  A software engineering student studying at the University of Alberta. <br />
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id='about'>
          <div className='min-vh-100 px-sm-4 py-5 my-5'>
            <div className='section py-5'>
              <h1 className='display-6 fw-bold mx-5'>About Me</h1>
              <div className='mx-5'>
                <p className='text-white-50'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h3 className='text-center'>My Interests</h3>



                <h3 className='text-center'>My Skills</h3>

                <h4>Languages:</h4>

                <div className='container-fluid p-4'>
                  <div className='row text-center'>

                  <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-javascript-plain display-2'></i>
                          <p className='fs-6'>JavaScript</p>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-typescript-plain display-2'></i>
                          <p className='fs-6'>TypeScript</p>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-java-plain display-2'></i>
                          <p className='fs-6'>Java</p>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-matlab-plain display-2'></i>
                          <p className='fs-6'>MATLAB</p>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-c-plain display-2'></i>
                          <p className='fs-6'>C</p>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-cplusplus-plain display-2'></i>
                          <p className='fs-6'>C++</p>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-sqlite-plain display-2'></i>
                          <p className='fs-6'>SQLite</p>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-mongodb-plain display-2'></i>
                          <p className='fs-6'>MongoDB</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <h4>Frameworks and Libraries:</h4>

                <div className='container-fluid p-4'>
                  <div className='row text-center'>

                  <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-nodejs-plain display-2'></i>
                          <p className='fs-6'>Node.js</p>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-vuejs-plain display-2'></i>
                          <p className='fs-6'>Vue.js</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <h4>Software/Technologies:</h4>



                <div className='container-fluid p-4'>
                  <div className='row text-center'>

                    
                    

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-unity-original display-2'></i>
                          <p className='fs-6'>Unity</p>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-amazonwebservices-original display-2'></i>
                          <p className='fs-6'>AWS</p>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-terraform-plain display-2'></i>
                          <p className='fs-6'>Terraform</p>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-git-plain display-2'></i>
                          <p className='fs-6'>Git</p>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 my-2'>
                      <div className='row'>
                        <div className='col'>
                          <i className='devicon-linux-plain display-2'></i>
                          <p className='fs-6'>Linux</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          

        </section>

        {/* Another Section */}
        <section className='panel'>
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

      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
