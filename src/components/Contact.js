import React from 'react';
import './vendor/bootstrap/dist/css/bootstrap.min.css';
import './vendor/boxicons/css/boxicons.min.css';

export default function Contact() {
  return (
    <>
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2></div>

        <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Bhopal, Madhya Pradesh, 462002, India</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p><a href="mailto:vishwaad9tya+work@gmail.com?subject=Subject&cc=cc@example.com">vishwaad9tya@gmail.com</a></p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p><a href="tel:+918409030463">+91 84090 30463</a></p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117350.24977338016!2d77.33585146123811!3d23.19955198499215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1657082128519!5m2!1sen!2sin" frameBorder="0" style={{border: 0, width: '100%', height: '290px'}} allowFullScreen></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="https://send.pageclip.co/zrRuafxTnWkX93jIVghoy8f9cbFCUEe6" role="form" className="pageclip-form" method="post">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" name="message" rows="10" id="message" required></textarea>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    </>
  );
}
