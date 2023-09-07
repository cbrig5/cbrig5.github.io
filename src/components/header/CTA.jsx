import React from "react";
import Resume from "../../assets/Bright,Corey_Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} target="_blank" rel="noreferrer" className="btn">
        View Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
