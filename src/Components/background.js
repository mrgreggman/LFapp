import BGvid from '../videos/Backgroundvid.mp4';
import './background.css';
import React from 'react';


const BackgroundVideo = () => {
    const videoSource = (BGvid)
    return(
        <div className='bgdiv'>
            <video className='bgvideo' autoPlay loop='loop' muted src={videoSource} />
        </div>
    )
}

export default BackgroundVideo