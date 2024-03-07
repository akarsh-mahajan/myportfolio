import Loader from '../Loader/Loader'
import './index.scss'
import emailjs from '@emailjs/browser'
import React, { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Symbols from './Symbols'

function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();
    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    const sendEmail = (e) => {
    e.preventDefault()

    emailjs
        .sendForm('service_0on8pxk', 'template_doy97w1', form.current, 'PgQBSiv0xdn7wWlAA')
        .then(
        () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, please try again')
        }
        )
    }

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx = {15}
                    />
                </h1>
                <p>
                I'm interested in Software Development related roles. However, if you have other requests or questions,
                don't hesitate to contact me using below form either.
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input name="subject" type="text" placeholder="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <Symbols />  
        </div>
        <Loader/>
    </>
  )
}

export default Contact