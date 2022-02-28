import React from "react";
import { FaGithub } from 'react-icons/fa';


const Project = () => {

    const photos = [
        {
            alt: 'CalisthenicsClub',
            href: 'https://tranquil-bastion-94254.herokuapp.com/',
            text: 'Express.js / Handlebar.js / Sequelize',
            github: 'https://github.com/Osamadahnoun/CalisthenicsClub'
        },
        {
            alt: 'The Tech Blog',
            href: 'https://obscure-wildwood-61807.herokuapp.com/',
            text: 'Express.js / Handlebar.js / Sequelize',
            github: 'https://github.com/Osamadahnoun/Tech-Blog'
        },
        {
            alt: 'LyricLover',
            href: 'https://osamadahnoun.github.io/LyricLover/',
            text: 'HTML / CSS (Bulma) / Javascript',
            github: 'https://github.com/Osamadahnoun/LyricLover'
        },
        {
            alt: 'Photoport',
            href: 'https://osamadahnoun.github.io/photo-port/',
            text: 'React.js',
            github: 'https://github.com/Osamadahnoun/photo-port'
        },
        {
            alt: 'social-network-API',
            href: 'https://github.com/Osamadahnoun/NoSQL-SocialNetwork-API',
            text: 'NoSQL(MongoDB) / Mongoose / Express.js',
            github: 'https://github.com/Osamadahnoun/NoSQL-SocialNetwork-API'
        },
        {
            alt: 'e-commerce-backend',
            href: 'https://github.com/Osamadahnoun/e-commerce-backend',
            text: 'MySQL / Sequelize / Express.js',
            github: 'https://github.com/Osamadahnoun/e-commerce-backend'
        }
    ]

    return (
        <section className="gallery">
             {photos.map((photo, i) => (
                 <div className="span">
                    <img src={require(`../../assets/images/${i}.png`)} alt={photo.alt}/>
                    <div className="image__overlay">
                        <span className="image__title" onClick={() => window.open(`${photo.href}`)}>{photo.alt}</span>
                        <span className="githubLink"><FaGithub onClick={() => window.open(`${photo.github}`)}/></span>
                        <p className="image__description">{photo.text}</p>
                    </div>
                 </div>
        ))}
        </section>
    )
}

export default Project