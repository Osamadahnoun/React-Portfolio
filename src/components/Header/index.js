import React from "react";
import Nav from "../Nav";

const Header = (props) => {
    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected
      } = props;
    
    return (
        <header>
            <h1>Osama Dahnoun</h1>
            <Nav 
                aboutSelected={aboutSelected}
                setAboutSelected={setAboutSelected}
                portfolioSelected={portfolioSelected}
                setPortfolioSelected={setPortfolioSelected}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
                resumeSelected={resumeSelected}
                setResumeSelected={setResumeSelected}
            />
        </header>
    )
}

export default Header