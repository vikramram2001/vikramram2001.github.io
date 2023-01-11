import React, { useEffect } from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Hosting from "./Hosting";
import "./Skill.css";
// import Aos from "aos";
// import "aos/dist/aos.css";

const Skill = ({skillRef}) => {
  // useEffect(() => {
  //   Aos.init({duration:2000})
  //  })

  return (
    <div className="container my-5" ref={skillRef}>
      <div className="skills">
        <h1 className="d-flex justify-content-center">SKILLS</h1>
      </div>
          <Frontend />
      <Backend />
      <Hosting />
      

    </div>
  );
};

export default Skill;
