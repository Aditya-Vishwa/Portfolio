import React from 'react';
import Profile from './profile-img.png';
import './vendor/bootstrap/dist/css/bootstrap.min.css';
import './vendor/boxicons/css/boxicons.min.css';

export default function Header() {
  return (
    <>
    <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

    <header id="header">
        <div className="d-flex flex-column">
            <div className="profile">
                <img src={Profile} alt="" className="img-fluid rounded-circle"/>
                <h1 className="text-light"><a href="index.html">Aditya Sharma</a></h1>
                <div className="social-links mt-3 text-center">
                    <a href="https://twitter.com/Aadii_Sharmaaa" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.instagram.com/aditya_vishwa/" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/aditya-vishwa/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/Aditya-Vishwa" className="github"><i className="bx bxl-github"></i></a>
                    <a href="https://www.youtube.com/@mp3_aadi" className="youtube"><i className="bx bxl-youtube"></i></a>
                </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
                <ul>
                    <li><a href="/" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="/" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                    <li><a href="/" className="nav-link scrollto"><i className="bx bx-cog"></i> <span>Skills</span></a></li>
                    <li><a href="/" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                    <li><a href="/" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                    <li><a href="/" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                </ul>
            </nav>
        </div>

        <footer id="footer">
        <div className="container">
            <div className="copyright">
                <p>&copy; Copyright 2024, All right reserved.</p>
                <div className="credits">
                    <p>Designed with <span style={{color : 'red'}} className="tie-icon-heart">❤</span> by <a href="https://www.linkedin.com/in/aditya-vishwa/">Aditya</a></p>
                </div>
            </div>
        </div>
        </footer>
    </header>
    </>
  )
}
