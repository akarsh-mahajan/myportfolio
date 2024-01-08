// import React, { useState, useEffect } from 'react';
import Linkedin from '../../../assets/images/Linkedin.jpg';
import Leetcode from '../../../assets/images/leetcode_logo.png';
import Github from '../../../assets/images/github_logo.png';
import GFG from '../../../assets/images/gfg_logo.png';
// import { useRef } from 'react';
import './index.scss'; // Assuming this file contains styles for the logo

function Logo() {
//   const solidLogoRef = useRef();
//   const [showSvg, setShowSvg] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSvg(false);
//     }, 3000); // Adjust the time (in milliseconds) for how long the SVG logo should be visible

//     return () => clearTimeout(timer);
//   }, []);

    return (
        <div className="logo-container">
        <a target="_blank" rel="noreferrer" href="https://leetcode.com/akarsh_23/">
            <img
                className="leetcode-logo"
                src={Leetcode}
                alt="SVG Logo"
            />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/akarsh-mahajan/">
            <img
                className="linkedin-logo"
                // ref={solidLogoRef}
                src={Linkedin}
                alt="Software, Developer"
            />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/akarsh-mahajan">
            <img
                className="git-logo"
                src={Github}
                alt="SVG Logo"
            />
        </a>
        <a target="_blank" rel="noreferrer" href="https://auth.geeksforgeeks.org/user/20ucc011">
            <img
                className="gfg-logo"
                src={GFG}
                alt="SVG Logo"
            />
        </a>
        </div>
    );
}

export default Logo;
