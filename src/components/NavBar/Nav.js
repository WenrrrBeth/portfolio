import React, { useState } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import "./Nav.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import bdresume from "../../files/BethD_resume.pdf";
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Nav = () => {

    const location = useLocation();
    const history = useHistory();
    const path = location.hash;

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className="navContainer">
            <NavHashLink smooth to="/portfolio#home" style={{textDecoration: "none", color: "black"}}><p className="name">Beth Ding</p></NavHashLink>
            <div className="navOptContainer">
                <NavHashLink smooth to="/portfolio#home" className={`navOpt ${path==="#home" && "select"}`}>HOME</NavHashLink>
                <NavHashLink smooth to="/portfolio#skill" className={`navOpt ${path==="#skill" && "select"}`}>SKILL</NavHashLink>
                <NavHashLink smooth to="/portfolio#projects" className={`navOpt ${path==="#projects" && "select"}`}>PROJECTS</NavHashLink>
                <NavHashLink smooth to="/portfolio#experience" className={`navOpt ${path==="#experience" && "select"}`}>EXPERIENCE</NavHashLink>
                <NavHashLink smooth to="/portfolio#contact" className={`navOpt ${path==="#contact" && "select"}`}>CONTACT</NavHashLink>
            </div>
            <div className="space"></div>
            <IconButton
                id="nav-burger"
                aria-controls="nav-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon className="burger" />
            </IconButton>
            <Menu
                id="nav-menu"
                aria-labelledby="nav-burger"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem onClick={handleClose}>
                    <NavHashLink smooth to="/portfolio#home" className="menuitem">HOME</NavHashLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavHashLink smooth to="/portfolio#skill" className="menuitem">SKILL</NavHashLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavHashLink smooth to="/portfolio#projects" className="menuitem">PROJECTS</NavHashLink>
                </MenuItem> 
                <MenuItem onClick={handleClose}>
                    <NavHashLink smooth to="/portfolio#experience" className="menuitem">EXPERIENCE</NavHashLink>
                </MenuItem> 
                <MenuItem onClick={handleClose}>
                    <NavHashLink smooth to="/portfolio#contact" className="menuitem">CONTACT</NavHashLink>
                </MenuItem> 
            </Menu>
            <div className="mediaOptContainer">
                <a href="https://www.linkedin.com/in/beth-ding/"><LinkedInIcon className="mediaIcon linkedIn" /></a>
                <a href="https://github.com/WenrrrBeth"><GitHubIcon className="mediaIcon github" /></a>
                <a href={bdresume}><img className="mediaIcon resume" src="https://img.icons8.com/material/96/000000/open-resume--v1.png" alt=""/></a>
            </div>
        </div>
    )
}

export default Nav
