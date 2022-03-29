import React from "react";
import photo from "../../assets/images/headshot.png";

const About = () => {
  return (
    <div className="about" id="about">
      <h2>About me</h2>
      <img src={photo} alt="" />
      <p>
        Welcome to my portfolio! I am a Full-Stack Web Developer with hands-on
        experience engineering over 40 web applications and 8+ full-stack web
        applications involving health and social platforms. I love to work on
        the frontend of applications leveraging my knowledge of the full-stack
        to create preimier applications. In my free time I enjoy lifting weights
        and playing team-based sports, including volleyball and basktball.
      </p>
    </div>
  );
};

export default About;
