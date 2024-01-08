// import React, { useState, useEffect } from 'react';
import LogoS from '../../../assets/images/logopreload.png';
import LogSvg from '../../../assets/images/logosvg.png';
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
        <img
            className="svg-logo"
            src={LogSvg}
            alt="SVG Logo"
        />
        <img
            className="solid-logo"
            // ref={solidLogoRef}
            src={LogoS}
            alt="Software, Developer"
        />
        </div>
    );
}

export default Logo;
