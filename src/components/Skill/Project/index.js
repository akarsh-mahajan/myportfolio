import React from 'react';
import './index.scss';
import HUF from '../../../assets/images/HUF.jpg'
import thaiocr from '../../../assets/images/thaiocr.png'

function Card() {
      return (
        <div>
            <div className="healthNGO">
            <div className="card-image" style={{ backgroundImage: `url('${HUF}')` }}></div>
            <div className="card-content">
              <div className="card-title">Health NGO Website</div>
              {/* <div className="card-description">{description}</div> */}
              <a href='http://healthumbrella.org' className="card-link" target="_blank" rel="noopener noreferrer">
                Website Link
              </a>
              <a href='https://github.com/healthumbrella' className="card-link" target="_blank" rel="noopener noreferrer">
                GitHub Link
              </a>
            </div>
          </div>
            <div className="ThaiOCRApp">
            <div className="card-image" style={{ backgroundImage: `url('${thaiocr}')` }}></div>
            <div className="card-content">
              <div className="card-title">ThaiOCRApp</div>
              {/* <div className="card-description">{description}</div> */}
              <a href='http://akarsh23.pythonanywhere.com/' className="card-link" target="_blank" rel="noopener noreferrer">
                Website Link
              </a>
              <a href='https://github.com/akarsh-mahajan/Thai-ID-OCR-App' className="card-link" target="_blank" rel="noopener noreferrer">
                GitHub Link
              </a>
            </div>
          </div>
        </div>
      );
  }
  
  export default Card;
