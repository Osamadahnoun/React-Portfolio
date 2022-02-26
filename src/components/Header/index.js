import React from "react";
import Nav from "../Nav";

const Header = (props) => {
    const {
        setAboutSelected,
        setPortfolioSelected,
        setContactSelected,
        setResumeSelected
      } = props;
    
    return (
        <header>
            <h1>Osama Dahnoun</h1>
            <Nav 
                setAboutSelected={setAboutSelected}
                setPortfolioSelected={setPortfolioSelected}
                setContactSelected={setContactSelected}
                setResumeSelected={setResumeSelected}
            />
        </header>
    )
}

export default Header