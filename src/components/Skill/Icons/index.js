import React from 'react';
import './index.scss';

function Icons() {
  return (
    <div className="icon-container">
      <table>
        <tbody>
          <tr>
            <td>
              <img className='Cpp' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="50" height="50"/>
            </td>
            <td>
              <img className='Python' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="50" height="50"/>
            </td>
            <td>
              <img className='Java'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="50" height="50"/>
            </td>
            <td>
              <img className='Javascript'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/>
            </td>
          </tr>
          <tr>
            <td>
              <img className='React' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50"/>
            </td>
            <td>
              <img className='HTML' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60"/>
            </td>
            <td>
              <img className='CSS' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60"/>
            </td>
            <td>
              <img className='Django' src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" width="50" height="50"/>
            </td>
          </tr>
          <tr>
            <td>
              <img className='MySQL' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="50" height="50"/>
            </td>
            <td>
              <img className='SQLite' src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="50" height="50"/>
            </td>
            <td>
              <img className='Git' src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="50" height="50"/>
            </td>
            <td>
              <img className='VScode' src="https://camo.githubusercontent.com/25d07ba4220a3fcadb4af12394d157494ec298dec4ecd86321961427ea18c9e8/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7673636f64652f7673636f64652d6f726967696e616c2e737667" alt="git" width="50" height="50"/>
            </td>
          </tr>
          <tr>
            <td>
              <img className='Figma' src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="50" height="50"/>
            </td>
            {/* Add more cells for additional skills */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Icons;
