import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-xxl">
          <a className="navbar-brand" href="#top">Rova</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-items" aria-controls="navbar-items" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-items">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#top">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#top">Projects</a>
              </li>
              {/* d-none d-lg-block */}
              <li className="nav-item ps-lg-2">
                <a className="navbar-brand" href="https://github.com/rob-villarre"><img src={require("../assets/github-mark/github-mark-white.png")} width={25} height={25} alt="GitHub"/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;