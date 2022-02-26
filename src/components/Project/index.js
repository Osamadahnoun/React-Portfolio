import React from "react";

const Project = () => {

    const photos = [
        {
            alt: 'CalisthenicsClub',
            href: 'https://tranquil-bastion-94254.herokuapp.com/',
        },
        {
            alt: 'TechBlog',
            href: 'https://obscure-wildwood-61807.herokuapp.com/',
        },
        {
            alt: 'LyricLover',
            href: 'https://osamadahnoun.github.io/LyricLover/',
        },
        {
            alt: 'Photoport',
            href: 'https://osamadahnoun.github.io/photo-port/',
        },
        {
            alt: 'NoSqlAPI',
            href: 'https://github.com/Osamadahnoun/NoSQL-SocialNetwork-API',
        },
        {
            alt: 'SqlAPI',
            href: 'https://github.com/Osamadahnoun/e-commerce-backend',
        }
    ]

    return (
        <section className="gallery">
             {photos.map((photo, i) => (
                     <img src={require(`../../assets/images/${i}.png`)} alt={photo.alt} onClick={() => window.open(`${photo.href}`)}/>
        ))}
        </section>
    )
}

export default Project