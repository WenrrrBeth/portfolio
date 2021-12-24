import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import bdresume from "../../../files/BethD_resume.pdf";

const Contact = () => {
    return (
        <div id="contact" style={{backgroundColor: "#f5f5f5", width: "100%", display: "flex", flexDirection: "column", marginTop: "90px"}}>
            <div className="headerContainer">
                <div className="header" style={{marginTop: "-30px", marginBottom: "30px"}}>
                    <p className="headerTitle" >Contact</p>
                </div>
                {/* <div className="divider" style={{zIndex: "100"}}></div> */}
            </div>
            <div className="connectInfo" style={{alignSelf: "center"}}>
                <div className="email">
                    <strong>email:</strong><a href="mailto:bethding0923@gmail.com" className="myemail">bethding0923@gmail.com</a>
                </div>
                <div className="media">
                    <a href="https://www.linkedin.com/in/beth-ding/"><LinkedInIcon className="mediaIcon linkedIn" /></a>
                    <a href="https://github.com/WenrrrBeth"><GitHubIcon className="mediaIcon github" /></a>
                    <a className="text resume" href={bdresume}>View Resume</a>
                </div>
            </div>
            <footer>
                <p style={{fontWeight: 600, fontFamily: "'Quattrocento', serif", marginBottom: "-3px", width: "100%"}}>© 2021 Beth Wen Ding</p>
                <a href="https://www.icons8.com" style={{fontFamily: "'Arya', sans-serif", color: "black", fontWeight: "200", fontSize: "13px"}}>(Some icons on this page can be found at icons8.com)</a>
            </footer>
        </div>
    )
}

export default Contact;
