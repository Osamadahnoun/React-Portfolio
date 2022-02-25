import React from "react";
import Project from "../Project";
import calisthenicsClub from '../../assets/images/calisthenicsclub.png'
import techBlog from '../../assets/images/techblog.png'
import lyricLover from '../../assets/images/lyriclover.png'
import photoPort from '../../assets/images/photo-port.png'
import NoSQLAPI from '../../assets/images/nosql-api.png'
import SQLAPI from '../../assets/images/sql-api.png'

const Gallery = () => {
    return (
        <div className="gallery-container">
        <h2>Portfolio</h2>
        <section className="gallery">
            <img src={calisthenicsClub} alt="" />
            <img src={techBlog} alt="" />
            <img src={lyricLover} alt="" />
            <img src={photoPort} alt="" />
            <img src={NoSQLAPI} alt="" />
            <img src={SQLAPI} alt="" />
        </section>
        </div>
    )
}

export default Gallery