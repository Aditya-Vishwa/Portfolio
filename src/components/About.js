import React, { useState, useEffect } from 'react';
import ProfilePic from './img/profile.jpg';
import './vendor/bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  // State to store dynamic age
  const [age, setAge] = useState(0);

  useEffect(() => {
    // Function to calculate age dynamically
    const calculateAge = () => {
      const birthDate = new Date('2003-04-25'); // Replace with actual birthdate
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      // Adjust age if the birthday hasn't occurred yet this year
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }
      setAge(age);
    };

    calculateAge(); // Initial calculation

    // Update age automatically every year
    const timer = setInterval(() => {
      calculateAge();
    }, 1000 * 60 * 60 * 24 * 365); // Update every year

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="about" className="about">
        <div className="container">

          <div className="section-title">
            <h2>About</h2>
            <p>Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. 
                -Steve Jobs</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={ProfilePic} className="img-fluid" alt="Aditya Sharma"/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Developer, Designer &amp; Linux Learner</h3>
              <p className="fst-italic">
                Security maintenance is the task of a good computer engineer | Computer Learner
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>25 April 2003</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span><a href="https://aditya-vishwa.me/">https://aditya-vishwa.me/</a></span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span><a href = "tel:+918409030463">+91 84090 30463</a></span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Bhopal, Madhya Pradesh, India</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{age}</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Tech in CSE (Pursuing)</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href = "mailto: vishwaad9tya+work@gmail.com?subject=Subject&cc=cc@example.com">vishwaad9tya@gmail.com</a></span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span><a href="https://www.fiverr.com/aditya_vishwa">Available</a></span></li>
                  </ul>
                </div>
              </div>
              <br/>
              <a href="https://github.com/Aditya-Vishwa/Aditya-Vishwa/raw/main/RESUME.pdf"><button>DOWNLOAD RESUME</button></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
