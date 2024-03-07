import React from 'react'
import Lottie from 'react-lottie';
import './Loader.scss'
import animationData from '../../assets/loader/loader.json'

export default function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div className='loader-active'>
        <Lottie options={defaultOptions} height={180} width={180}/>
      </div>
    )
}
