import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import Logo from './Logo'
function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['k', 'a' ,'r', 's', 'h', ',' ]
  const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
  const hiArray = ['H', 'i', ',']
  const ImArray = ['I', "'", 'm']

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>
            <AnimatedLetters letterClass={letterClass}
            strArray={hiArray}
            idx={10} />
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={ImArray}
            idx={13} />
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={16} />
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={22} />
            </h1>
            <h2>Dynamic Engineer | Transforming Challenges into Solutions </h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
    </div>
  );
}

export default Home