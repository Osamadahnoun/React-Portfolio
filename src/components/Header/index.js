import React from "react";
import Nav from "../Nav";
import { FaRegSmileBeam } from 'react-icons/fa'

const Header = (props) => {
    const {
        setAboutSelected,
        setPortfolioSelected,
        setContactSelected,
        setResumeSelected
      } = props;
    
    return (
        <header>
            <h1>Osama Dahnoun <FaRegSmileBeam className="logo" /></h1>
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