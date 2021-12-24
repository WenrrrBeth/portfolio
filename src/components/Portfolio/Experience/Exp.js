import React from "react";
import { expData } from "./expData";
import globe from "../../../images/globe3.png";
import "./Exp.css";

const Exp = () => {
    return (
        <div id="experience" className="expContainer">
            <div className="headerContainer">
                <div className="header">
                    <img className="headerIcon" src={globe} alt="" />
                    <p className="headerTitle" >Experience</p>
                </div>
                <div className="divider" style={{width: "255px"}}></div>
            </div>
            <div className="expContentContainer">
                {
                    expData.map((exp) => (
                        <div className="expCard">
                            <div className="expCardContent">
                                <div className="expCardFront">
                                    <img style={{objectFit: "contain", width: "55%", margin: "20px"}} src={exp.employerImg.img} alt="" />
                                    <div style={{fontFamily: "'Abril Fatface', cursive", fontSize: "20px", marginBottom: "5px"}}>{exp.employer}</div>
                                    <div style={{fontFamily: "'Quattrocento', serif", fontSize: "18px", marginBottom: "5px"}}>{exp.jobTitle}</div>
                                    <div style={{fontFamily: "'Quattrocento', serif"}}>{exp.date}</div>
                                </div>
                                <div className="expCardBack" style={{backgroundColor: exp.employerImg.bkgColor}}>
                                    <div style={{display: "flex", flexDirection: "row", alignContent: "center"}} className="rowCard">
                                        <img style={{objectFit: "contain", width: "25%", margin: "20px"}} src={exp.employerImg.img} alt="" />
                                        <div style={{display: "flex", flexDirection: "column", margin: "20px 0px", alignSelf: "center"}}>
                                            <div style={{fontFamily: "'Abril Fatface', cursive", fontSize: "18px", marginBottom: "5px", textAlign: "left"}}>{exp.employer}</div>
                                            <div style={{fontFamily: "'Quattrocento', serif", fontSize: "16px", marginBottom: "5px", textAlign: "left"}}>{exp.jobTitle}</div>
                                            <div style={{fontFamily: "'Quattrocento', serif", fontSize: "14px", textAlign: "left"}}>{exp.date}</div>
                                        </div>
                                    </div>
                                    <ul>
                                        {
                                            exp.descs.map((desc) => (
                                                <li style={exp.descs.length>=3 ? {fontFamily: "'Quattrocento', serif", marginBottom: "10px",textAlign: "left", fontSize: "16px"} : {fontFamily: "'Quattrocento', serif", marginBottom: "15px", textAlign: "left", fontSize: "18px"}}>{desc}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Exp;
