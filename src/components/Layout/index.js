import React from 'react'
import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='page'>
      <span className='top-tag-html'>&lt;html&gt;</span>
        <br/>
        <span className='top-tags'>&lt;body&gt;</span>
        <Outlet />
        <span className='bottom-tags'>
          &lt;/body&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout;