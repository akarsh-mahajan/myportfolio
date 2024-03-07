import React, { useEffect, useState } from 'react'
// import Sphere from './Sphere'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders';
import Card from './Project';
import './index.scss'
import { Link } from 'react-router-dom';
import Skillset from './typeAnimation';
// import Icons from './Icons';

function Skills() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className='container skills-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <Skillset />
          {/* <div className='gif'>
            <img align="right" alt="Coding" width="400" src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif"></img>
          </div> */}
          <Link to="/contact" className='contact-button'>CONTACT ME</Link>
        </div>
        <div className='project'>
          <Card />
        </div>
        {/* <Icons /> */}
        {/* <Sphere /> */}
        {/* <div className='skills-text'>
            <h6>C++</h6><h6>Python</h6><h6>Java</h6><h6>Django</h6><h6>MySQL</h6>
            <h6>HTML</h6><h6>CSS</h6><h6>CN</h6><h6>DBMS</h6><h6>OOPS</h6>
            <h6>OS</h6><h6>Data Structures</h6><h6>Algorithms</h6><h6>Problem Solving</h6>
            <h6>GitHub</h6><h6>REST APIs</h6> 
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Skills;
