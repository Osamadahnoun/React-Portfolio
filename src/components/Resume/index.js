import React from "react";

const Resume = () => {

    const arr1 = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Responsive design', 'React', 'Bootstrap']
    const arr2 = ['APIs', 'Node', 'Express', 'MySQL, Sequelize', 'MongoDB, Mongoose', 'REST', 'GraphQL']

    return (
        <section className="resume-container">
            <h2>Resume</h2>
            <p>Download my resume</p>
            <ul>
               <h3>Front-End Proficiencies</h3>
               {arr1.map((name) => (
                   <li>{name}</li>
               ))}
            </ul>
            <ul>
                <h3>Back-End Proficiencies</h3>
                {arr2.map((name) => (
                   <li>{name}</li>
               ))}
            </ul>
        </section>
    )
}

export default Resume