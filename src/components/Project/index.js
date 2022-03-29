import React from "react";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const photos = [
    {
      alt: "OzzyChat",
      href: "https://ozzy-chat.herokuapp.com/",
      text: "MERN / Socket.io",
      github: "https://github.com/Osamadahnoun/ozzy-chat",
    },
    {
      alt: "roadie",
      href: "https://on-the-roadie.herokuapp.com/",
      text: "MERN",
      github: "https://github.com/Osamadahnoun/roadie",
    },
    {
      alt: "CalisthenicsClub",
      href: "https://tranquil-bastion-94254.herokuapp.com/",
      text: "Express.js / Handlebar.js / Sequelize",
      github: "https://github.com/Osamadahnoun/CalisthenicsClub",
    },
    {
      alt: "The Tech Blog",
      href: "https://obscure-wildwood-61807.herokuapp.com/",
      text: "Express.js / Handlebar.js / Sequelize",
      github: "https://github.com/Osamadahnoun/Tech-Blog",
    },
    {
      alt: "LyricLover",
      href: "https://osamadahnoun.github.io/LyricLover/",
      text: "HTML / CSS (Bulma) / Javascript",
      github: "https://github.com/Osamadahnoun/LyricLover",
    },
    {
      alt: "Photoport",
      href: "https://osamadahnoun.github.io/photo-port/",
      text: "React.js",
      github: "https://github.com/Osamadahnoun/photo-port",
    },
  ];

  return (
    <section className="gallery">
      {photos.map((photo, i) => (
        <div className="span">
          <img src={require(`../../assets/images/${i}.png`)} alt={photo.alt} />
          <div className="image__overlay">
            <span
              className="image__title"
              onClick={() => window.open(`${photo.href}`)}
            >
              {photo.alt}
            </span>
            <span className="githubLink">
              <FaGithub onClick={() => window.open(`${photo.github}`)} />
            </span>
            <p className="image__description">{photo.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Project;
