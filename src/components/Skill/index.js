import React, { useEffect, useState } from 'react'
// import Sphere from './Sphere'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders';
import Card from './Project';
import './index.scss'
import { Link } from 'react-router-dom';
import Skillset from './typeAnimation';

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
          <Card />
          <Link to="/contact" className='contact-button'>CONTACT ME</Link>
        </div>
        <Skillset />
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
