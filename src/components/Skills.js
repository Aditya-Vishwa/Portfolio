import React from 'react';
import './vendor/bootstrap/dist/css/bootstrap.min.css';

export default function Skills() {
  const skills = [
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 70 },
    { name: 'JavaScript', value: 65 },
    { name: 'React', value: 70 },
    { name: 'Prompt Engineering', value: 60 },
    { name: 'SQL', value: 70 },
    { name: 'WordPress', value: 80 },
    { name: 'Linux Command', value: 90 },
    { name: 'Adobe Illustrator', value: 35 },
    { name: 'Canva', value: 75 },
  ];

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row skills-content">
          {[0, 1].map((col) => (
            <div
              key={col}
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={col === 1 ? "100" : "0"}
            >
              {skills
                .slice(col * 5, col * 5 + 5)
                .map((skill, index) => (
                  <div className="progress" key={index}>
                    <span className="skill">
                      {skill.name} <i className="val">{skill.value}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.value}%` }}
                        aria-valuenow={skill.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
