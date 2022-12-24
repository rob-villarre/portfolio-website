import React from "react";

class About extends React.Component {
  render() {
    return (
    <section id='about'>
      <div className='min-vh-100 px-sm-4 py-5 my-5'>
        <div className='py-5 mx-5'>
          <h1 className='display-6 fw-bold'>About Me</h1>
          <p className='text-white-50'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h3>My Interests</h3>
          <div className='row'>

            <div className='col-lg-4 col-12 my-sm-2'>
              <div className='card'>
                <div className='card-header'>
                    <small className=' text-nowrap'>Cloud Computing</small>
                </div>
                  <div className='col card-body'>
                    <div className='text-center display-5'>
                      <i className='devicon-googlecloud-plain'></i>
                    </div>
                    <p className='col card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-sm-2">
              <div className='card'>
                <div className='card-header'>
                  <small>Computer Graphics</small>
                </div>
                <div className='card-body'>
                  <div className='text-center display-5'>
                    <i className='devicon-opengl-plain'></i>
                  </div>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-sm-2">
              <div className='card'>
                <div className='card-header'>
                  <small>Web Development</small>
                </div>
                <div className='card-body'>
                  <div className='text-center display-5'>
                    <i className='devicon-react-plain'></i>
                  </div>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
    )
  }
}

export default About;


 