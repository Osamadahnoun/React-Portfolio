import React from "react";
import githubLogo from '../../assets/images/GitHub-Mark-120px-plus.png'
import linkedinLogo from '../../assets/images/linkedin.png'
import phoneLogo from '../../assets/images/phone.png'

const Footer = () => {
    return (
        <footer className="sticky-footer">
            <img src={githubLogo} alt="" />
            <img src={linkedinLogo} alt="" />
            <img src={phoneLogo} alt="" />
        </footer>
    )
}

export default Footer