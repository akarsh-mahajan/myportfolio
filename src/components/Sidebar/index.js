import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import React from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

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
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon = {faEnvelope} color='grey'/>
            </NavLink>
        
        </nav>
    </div>
  )
}

export default index;