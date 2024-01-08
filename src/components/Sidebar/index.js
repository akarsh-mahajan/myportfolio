import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import React from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCog, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function index() {
  return (
    <div className = 'nav-bar'>
        <Link className = 'logo' to='/'>
            <img src = {LogoS} alt = "logo" />
            <img src = {LogoSubtitle} alt = "Akarsh" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className={"home-link"} to="/">
                <FontAwesomeIcon icon = {faHome} color='grey'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon = {faUser} color='grey'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
                <FontAwesomeIcon icon = {faCog} color='grey'/>
            </NavLink>
            {/* <NavLink exact="true" activeclassname="active" className="experience-link" to="/experience">
                <FontAwesomeIcon icon = {faBriefcase} color='grey'/>
            </NavLink> */}
            {/* <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon = {faEye} color='grey'/>
            </NavLink> */}
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon = {faEnvelope} color='grey'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/akarsh-mahajan/'>
                    <FontAwesomeIcon icon = {faLinkedin} color='grey'/>
                </a>

            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/akarsh-mahajan'>
                    <FontAwesomeIcon icon = {faGithub} color='grey'/>
                </a>
            </li>    
            <li>
                <a target="_blank" rel="noreferrer" href='mailto:akarshmahajan23@gmail.com'>
                    <FontAwesomeIcon icon = {faGoogle} color='grey'/>
                </a>
            </li>    
        </ul>
    </div>
  )
}

export default index;