import React, { useEffect, useState } from 'react'
import Sphere from './Sphere'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders';
import Card from './Project';
import './index.scss'
import { Link } from 'react-router-dom';

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
        <Sphere />
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Skills;
