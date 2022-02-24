import React from "react";
import photo from '../../assets/images/portfolioImage.png'

const About = () => {
    return (
        <div className="about">
            <h2>About me</h2>
            <img src={photo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nobis necessitatibus deleniti repellat nostrum accusamus ex nemo animi alias totam eligendi maxime ea deserunt dolore asperiores quasi temporibus! Odio, numquam?</p>
        </div>
    )
}


export default About