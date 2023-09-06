import React from "react";
import "./skill.css";
import { PiSealCheckFill } from "react-icons/pi";

const Skill = () => {
  return (
    <section id="skill">
      <h5>Exploring my abilities</h5>
      <h2>My Skills</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <PiSealCheckFill className="skill__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="skill__details">
              <PiSealCheckFill className="skill__details-icon" />

              <div>
                <h4>CSS</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="skill__details">
              <PiSealCheckFill className="skill__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <PiSealCheckFill className="skill__details-icon" />
              <div>
                <h4>Responsive Web Design</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="skill__details">
              <PiSealCheckFill className="skill__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <PiSealCheckFill className="skill__details-icon" />
              <div>
                <h4>Full-stack Coordination</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skill__backend">
          <h3>Backend Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <PiSealCheckFill className="skill__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="skill__details">
              <PiSealCheckFill className="skill__details-icon" />
              <div>
                <h4>Node.Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <PiSealCheckFill className="skill__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <PiSealCheckFill className="skill__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <PiSealCheckFill className="skill__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="skill__details">
              <PiSealCheckFill className="skill__details-icon" />
              <div>
                <h4>Version Control</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
