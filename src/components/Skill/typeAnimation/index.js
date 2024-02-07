import React from 'react';
import './index.scss';
import { TypeAnimation } from 'react-type-animation';

function Skillset() {
  return (
    <div className="skillset-container">
      <div className="type-animation-wrapper">
        <TypeAnimation
          sequence={[
            'I have worked with C++',
            1000,
            'I have worked with Java',
            1000,
            'I have worked with Python',
            1000,
            'I have worked with Django',
            1000,
            'I have worked with REST APIs',
            1000,
            'I have worked with MySQL',
            1000,
            'I have worked with DBMS',
            1000,
            'I have worked with OOPs',
            1000,
            'I have worked with OS',
            1000,
            'I have worked with CN',
            1000,
            'I have worked with Git',
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default Skillset;