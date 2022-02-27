import React, { useState } from "react";

const Nav = (props) => {

    const sections = [
        {name: "About me"},
        {name: "Portfolio"},
        {name: "Contact"},
        {name: "Resume"}
    ]

    const [currentSection, setCurrentSection] = useState(sections[0])

    const {
        setAboutSelected,
        setPortfolioSelected,
        setContactSelected,
        setResumeSelected
      } = props;

    const sectionSelected = (name) => {
        if(name === 'About me') {
            setAboutSelected(true)
            setPortfolioSelected(false)
            setContactSelected(false)
            setResumeSelected(false)
        }
        else if (name === 'Portfolio') {
            setPortfolioSelected(true)
            setAboutSelected(false)
            setContactSelected(false)
            setResumeSelected(false)
        }
        else if (name === 'Contact') {
            setContactSelected(true)
            setPortfolioSelected(false)
            setAboutSelected(false)
            setResumeSelected(false)
        }
        else if (name === 'Resume') {
            setResumeSelected(true)
            setPortfolioSelected(false)
            setAboutSelected(false)
            setContactSelected(false)
        }
    }

    return (
            <nav>
                <ul>
                    {sections.map((section) => (
                        <li key={section.name} onClick={() => {
                            sectionSelected(section.name)
                            setCurrentSection(section)
                        }} className={currentSection.name === section.name && 'navActive'}>
                            {section.name}
                        </li>
                    ))}
                </ul>
            </nav>
    )
}

export default Nav
