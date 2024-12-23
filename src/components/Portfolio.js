import React from 'react';
import './vendor/bootstrap/dist/css/bootstrap.min.css';
import './vendor/boxicons/css/boxicons.min.css';
import PortfolioImage1 from './img/portfolio-1.jpg';
import PortfolioImage2 from './img/portfolio-2.jpg';
import PortfolioImage3 from './img/portfolio-3.jpg';
import PortfolioImage4 from './img/portfolio-4.jpg';
import PortfolioImage5 from './img/portfolio-5.jpg';
import PortfolioImage6 from './img/CodeBooter.png';
import PortfolioImage7 from './img/LK.png';
import PortfolioImage8 from './img/LCC-logo.png';
import PortfolioImage9 from './img/LCC-Banner.png';

export default function Portfolio() {
  return (
    <>
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My portfolio also includes a collection of work samples that demonstrate my ability to think outside the box and produce innovative solutions.</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">CUI</li>
              <li data-filter=".filter-web">Web</li>
              <li data-filter=".filter-graphics">Graphics</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={PortfolioImage1} className="img-fluid" alt="Aditya Sharma"/>
              <div className="portfolio-links">
                <a href={PortfolioImage1} data-gallery="portfolioGallery" className="portfolio-lightbox" title="LibranSys"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={PortfolioImage2} className="img-fluid" alt="Aditya Sharma"/>
              <div className="portfolio-links">
                <a href={PortfolioImage2} data-gallery="portfolioGallery" className="portfolio-lightbox" title="GeRanPass"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={PortfolioImage3} className="img-fluid" alt="Aditya Sharma"/>
              <div className="portfolio-links">
                <a href={PortfolioImage3} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Portfolio"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={PortfolioImage4} className="img-fluid" alt="Aditya Sharma"/>
              <div className="portfolio-links">
                <a href={PortfolioImage4} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Fmail"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={PortfolioImage5} className="img-fluid" alt="Aditya Sharma"/>
              <div className="portfolio-links">
                <a href={PortfolioImage5} data-gallery="portfolioGallery" className="portfolio-lightbox" title="ComLiT"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-graphics">
            <div className="portfolio-wrap">
              <img src={PortfolioImage6} className="img-fluid" alt="Aditya Sharma"/>
              <div className="portfolio-links">
                <a href={PortfolioImage6} data-gallery="portfolioGallery" className="portfolio-lightbox" title="CodeBooter-Logo"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-graphics">
            <div className="portfolio-wrap">
              <img src={PortfolioImage7} className="img-fluid" alt="Aditya Sharma"/>
              <div className="portfolio-links">
                <a href={PortfolioImage7} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Laxman-Khadka-Logo"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-graphics">
            <div className="portfolio-wrap">
              <img src={PortfolioImage8} className="img-fluid" alt="Aditya Sharma"/>
              <div className="portfolio-links">
                <a href={PortfolioImage8} data-gallery="portfolioGallery" className="portfolio-lightbox" title="LNCT Coursera Community"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-graphics">
            <div className="portfolio-wrap">
              <img src={PortfolioImage9} className="img-fluid" alt="Aditya Sharma"/>
              <div className="portfolio-links">
                <a href={PortfolioImage9} data-gallery="portfolioGallery" className="portfolio-lightbox" title="LNCT Coursera Community"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}
