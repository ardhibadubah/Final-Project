import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import logo from "../../component/Logo.png";
import "./style.css";
import Button from "../Button/Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            VSI
            <i className="bi bi-sunrise-fill" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "bi bi-layout-text-sidebar" : "bi bi-layout-text-sidebar"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/wisata" className="nav-links" onClick={closeMobileMenu}>
                Wisata
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/budaya" className="nav-links" onClick={closeMobileMenu}>
                Budaya
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/kuliner" className="nav-links" onClick={closeMobileMenu}>
                Kuliner
              </Link>
            </li>

            <li>
              <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
      {/* <header className="p-3 mb-4 bg-success text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/landingPage" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <img className="Logo-sumbawa" src={logo} alt="logo" />
            </Link>
            <div id="navItem">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link to="/" className="nav-link px-2 text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/wisata" className="nav-link px-2 text-white">
                    Wisata
                  </Link>
                </li>
                <li>
                  <Link to="/kuliner" className="nav-link px-2 text-white">
                    Kuliner
                  </Link>
                </li>
                <li>
                  <Link to="/budaya" className="nav-link px-2 text-white">
                    Budaya
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
}
export default Navbar;
