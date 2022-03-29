import React from "react";
import resume from "../../assets/images/osamadahnoun.pdf";

const Resume = () => {
  const arr1 = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Responsive design",
    "React",
    "Bootstrap",
  ];
  const arr2 = [
    "APIs",
    "Node",
    "Express",
    "MySQL, Sequelize",
    "MongoDB, Mongoose",
    "REST",
    "GraphQL",
  ];

  return (
    <section className="resume-container">
      <h2>Resume</h2>
      <p>
        <a href={resume} className="resumeDownload" download>
          Download my resume
        </a>
      </p>
      <ul>
        <h3>Front-End Proficiencies</h3>
        {arr1.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <ul>
        <h3>Back-End Proficiencies</h3>
        {arr2.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
