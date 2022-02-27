import React from "react";
import githubLogo from '../../assets/images/GitHub-Mark-120px-plus.png'
import linkedinLogo from '../../assets/images/linkedin.png'
import phoneLogo from '../../assets/images/phone.png'

const Footer = ( {setOpenModal} ) => {
    return (
        <footer className="sticky-footer">
            <img src={githubLogo} alt="" onClick={() => window.open('https://github.com/Osamadahnoun')}/>
            <img src={linkedinLogo} alt="" onClick={() => window.open('https://www.linkedin.com/in/osama-dahnoun-99374a231')}/>
            <img src={phoneLogo} alt="" className="openModalBtn" onClick={() => setOpenModal(true)}/>
        </footer>
    )
}

export default Footer