/* eslint-disable no-unused-vars */
import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
<p className='p'>For Better Experience Download <br /> Hungary App</p>
<div className="app-download-platforms">
    <img src={assets.play_store} alt="" />
    <img src={assets.app_store} alt="" />
</div>
    </div>
  )
}

export default AppDownload