import React from "react";

import gsap from 'gsap';
import { ScrollTrigger, SteppedEase, TextPlugin } from 'gsap/all';

class Hero extends React.Component {

  componentDidMount(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(SteppedEase);

    gsap.fromTo('#cursor', {autoAlpha: 0, x:-10}, {autoAlpha: 1, duration: 1, repeat: -1, ease: SteppedEase.config(1)});
    gsap.to('#text', {text: {value: 'Hello World!'}, duration: 2, delay: 0, ease: 'none'})
  }

  render() {
    return (
      <section id='hero'>
          <div className='min-vh-100 px-sm-4 py-5 d-flex flex-column justify-content-center'>
            <div className="py-5 mx-5 bg-dark">
              <div className="px-lg-2 px-4">
                {/*Hello World Message*/}
                <h1 className='display-6 fw-bold mx-sm-5'><span id='text'></span><span id='cursor'>|</span></h1>
                <div className='mx-sm-5'>
                  <h2 className='fs-3 mb-4'>I'm Roberto Villarreal Andrade,</h2>
                  <h3 className='fs-4 text-white-50'>
                    A software engineering student at the University of Alberta. <br />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default Hero;