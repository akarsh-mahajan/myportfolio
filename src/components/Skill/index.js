import React, { useEffect, useState } from 'react'
import Sphere from './Sphere'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders';
import Card from './Card';
// import HUF from '../../assets/images/HUF.jpg'
import './index.scss'

function Skills() {
  const [letterClass, setLetterClass] = useState('text-animate')
    // const form = useRef();
    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
  return (
    <>
      <div className='container skills-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                    idx = {15}
                />
            </h1>
            <Card />
        </div>
          <Sphere />
      </div>
    <Loader type="pacman" />
    </>
  )
}

export default Skills