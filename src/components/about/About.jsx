import React from "react";
import "./about.css";
import { TbAward } from "react-icons/tb";
import { GiClassicalKnowledge } from "react-icons/gi";
import { AiFillFolderOpen } from "react-icons/ai";
import ME from "../../assets/IMG_4421.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon" />
              <h5>Experience</h5>
              <small>2023 Fullstack Internship</small>
            </article>

            <article className="about__card">
              <GiClassicalKnowledge className="about__icon" />
              <h5>CS Classes</h5>
              <small>15+</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            I'm a Computer Science senior at SUNY Brockport with a passion for
            full-stack development. I've gained hands-on experience through an
            internship at Odoo, where I worked on both front-end and back-end
            coding. Beyond coding, I enjoy hiking and playing basketball with
            friends. I'm a versatile and dedicated candidate ready to contribute
            to software development projects.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
