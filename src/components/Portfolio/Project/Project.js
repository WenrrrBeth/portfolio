import React from 'react';
import { wbprjData } from "./data/webDev";
import { mbprjData } from "./data/mobileDev";
import { othprjData } from "./data/otherPrj";
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Project.css";

const Project = () => {
    return (
        <div id="projects" className="prjContainer">
            <div className="prjHeaderContainer">
                <div className="prjHeader">
                    <svg className="prjHeaderIcon" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#B3F6DE" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M241.88037,110.64453A16.03934,16.03934,0,0,0,228.90039,104H216V88a16.01833,16.01833,0,0,0-16-16H130.667l-27.7334-20.7998A16.10323,16.10323,0,0,0,93.333,48H40A16.01833,16.01833,0,0,0,24,64V208c0,.05127.00684.10059.00781.15137.002.1123.00977.22412.0166.33642.01172.19043.02832.37891.05274.56592q.02051.15234.04639.30371c.03515.20459.07861.40576.1289.605.021.08252.04.16553.064.24756.06836.23877.14843.47217.23779.70117.0166.042.02978.08545.04687.12793a7.867,7.867,0,0,0,.39014.81592c.01563.02881.03467.05566.05078.084q.1919.33912.41553.65625c.019.02686.0332.05567.05225.08252.03564.04883.07763.09082.11377.13916.12255.16163.24951.31885.38378.47022.06836.07764.13672.1543.20752.22851.14161.14844.29.29.44287.42725.064.05713.125.11768.19043.17285a7.94692,7.94692,0,0,0,.69581.52832l.01953.01172a7.96822,7.96822,0,0,0,.73632.43311c.064.0332.12989.0625.19483.09375.19971.09765.40332.18847.61182.26953.0791.03027.1582.05859.23828.08691q.30176.1062.61377.188c.08447.02246.168.04541.25293.06494.21386.04883.43164.08643.65185.11817.0791.01123.15674.02685.23633.03613A8.06189,8.06189,0,0,0,32,216H208a8.00117,8.00117,0,0,0,7.58984-5.47021l28.48926-85.47022A16.039,16.039,0,0,0,241.88037,110.64453ZM93.333,64l27.7334,20.7998A16.10323,16.10323,0,0,0,130.667,88H200v16H69.76611a15.98037,15.98037,0,0,0-15.1792,10.94043L40,158.70166V64Z"></path></svg>
                    <p className="prjHeaderTitle" >Project</p>
                </div>
                <div className="prjDivider"></div>
            </div>
            <div className="prjContentContainer">
                <div className="colDivider" id="webprj">
                    <div className="subNav" >Web Development Projects</div>
                    <div style={{display:"flex", flexDirection: "column"}}>
                        {
                            wbprjData.map((website) => (
                                <div className="prjContent">
                                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                        <div className="prjName">{website.name}</div>
                                        <a href={website.github} style={{textDecoration: "none"}}><GitHubIcon className="githubIcon" /></a>
                                    </div>
                                    { !website.desktopGif && <div style={{textAlign: "left", backgroundColor: "lightgray", borderRadius: "10px", width: "fit-content", height: "fit-content", marginTop: "-12px", marginBottom: "12px"}}>#Hackathon</div> }
                                    <div className="prjDesc">{website.desc}</div>
                                    { website.desktopGif && <div className="subtitle">WEBSITE DEMO</div> }
                                    <div className="prjDemo">
                                        { website.desktopGif && <img className="prjDemo desktopDemo" src={website.desktopGif} alt="" /> }
                                        { website.mobileGif && <img className="prjDemo mobileDemo" src={website.mobileGif} alt="" /> }
                                    </div>
                                    <div className="subpoints">
                                        <div className="column">
                                            <div className="subtitle">FEATURES</div>
                                            <ul className="notes">
                                                {
                                                    website.features.map((feature) => (
                                                        <li>{feature}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className="column">
                                            <div className="subtitle">TECHNOLOGIES</div>
                                            <ul className="notes">
                                                {
                                                    website.techs.map((tech) => (
                                                        <li>{tech}</li>
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
                <div className="colDivider">
                    <div className="subNav" > MOBILE DEVELOPMENT PROJECTS</div>
                    <div style={{display:"flex", flexDirection: "column"}}  id="mobileprj">
                        {
                            mbprjData.map((app) => (
                                <div className="prjContent">
                                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                        <div className="prjName">{app.name}</div>
                                        <a href={app.github} style={{textDecoration: "none"}}><GitHubIcon className="githubIcon" /></a>
                                    </div>
                                    <div className="prjDesc">{app.desc}</div>
                                    <div className="subpoints">
                                        <div className="column">
                                            <div className="subtitle">APP DEMO</div>
                                            <div className="prjDemo">
                                                { app.mobileGif && <img className="prjDemo mobileDemo" src={app.mobileGif} alt="" /> }
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="subtitle">FEATURES</div>
                                            <ul className="notes">
                                                {
                                                    app.features.map((feature) => (
                                                        <li>{feature}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className="column">
                                            <div className="subtitle">TECHNOLOGIES</div>
                                            <ul className="notes">
                                                {
                                                    app.techs.map((module) => (
                                                        <li>{module}</li>
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
                <div className="colDivider">
                    <div className="subNav" id="otherprj">Other Projects</div>
                    <div style={{display:"flex", flexDirection: "column"}}>
                        {
                            othprjData.map((prj) => (
                                <div className="prjContent">
                                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                        <div className="prjName">{prj.name}</div>
                                        <a href={prj.github} style={{textDecoration: "none"}}><GitHubIcon className="githubIcon" /></a>
                                    </div>
                                    { prj.tags && 
                                        <div style={{display: "flex", flexWrap: "wrap", gap: "5px"}}>
                                            {
                                                prj.tags.map((tag) => (<div style={{textAlign: "left", backgroundColor: tag.color, borderRadius: "10px", width: "fit-content", height: "fit-content", marginTop: "-12px", marginBottom: "12px"}}># {tag.name}</div> ))
                                            }
                                        </div>
                                    }
                                    <div className="prjDesc">{prj.desc}</div>
                                    {
                                        prj.demo.half ? (
                                            <div className="subpoints" >
                                                <div className="column">
                                                    { prj.demo.image && <div className="subtitle">{prj.demo.name}</div> }
                                                    <div className="prjDemo">
                                                        { prj.demo.image && <img className="prjDemo mobileDemo" src={prj.demo.image} alt="" /> }
                                                    </div>
                                                </div>
                                                <div className="subpoints">
                                                    <div className="column">
                                                        <div className="subtitle">FEATURES</div>
                                                        <ul className="notes">
                                                            {
                                                                prj.features.map((feature) => (
                                                                    <li>{feature}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                    <div className="column">
                                                        <div className="subtitle">TECHNOLOGIES</div>
                                                        <ul className="notes">
                                                            {
                                                                prj.techs.map((tech) => (
                                                                    <li>{tech}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                { prj.demo.image && <div className="subtitle">{prj.demo.name}</div> }
                                                <div className="prjDemo">
                                                    { prj.demo.image && <img className="demofullimg" src={prj.demo.image} alt="" /> }
                                                </div>
                                                <div className="subpoints" >
                                                    <div className="column">
                                                        <div className="subtitle">FEATURES</div>
                                                        <ul className="notes">
                                                            {
                                                                prj.features.map((feature) => (
                                                                    <li>{feature}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                    <div className="column">
                                                        <div className="subtitle">TECHNOLOGIES</div>
                                                        <ul className="notes">
                                                            {
                                                                prj.techs.map((tech) => (
                                                                    <li>{tech}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
