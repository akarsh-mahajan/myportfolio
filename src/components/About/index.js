import React from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3, faGitAlt, faHtml5, faPython, faJava} from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons';
import Loader from '../Loader/Loader'

function About() {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

  return (
    <>
    <div className='container about-page'>
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p>
               I'm a highly ambitious software developer actively seeking a role within an IT company 
               where I can engage with the latest technologies and take on challenging and diverse projects
            </p>
            <p>
                Currently pursuing B.Tech in Communication & Computer Engineering at LNMIIT. Proficient in C++, 
                Java, MySQL, C, Matlab, Python, Django, ReactJS, HTML, CSS. Solid foundation in Data Structures, Algorithms,
                OOPs, Database Management, Operating Systems, and Computer Networks.
            </p>
            <p>I am eager to bring my passion for innovation, strong technical skills, and practical experience to a dynamic IT environment.
            </p>
        </div>
        <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faDatabase} color="#DD0031"/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faPython} color="#5ED4F4"/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJava} color="#EFD81D"/>
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                </div>
            </div>
        </div>
    </div>
    <Loader />
    </>
  )
}

export default About