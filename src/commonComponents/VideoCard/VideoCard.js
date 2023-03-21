import React, { useContext } from 'react';
import './VideoCard.scss';
import { currentRunnigVideoContext } from '../../App';


export default function VideoCard({videoData,currentIndex}) {
    const value = useContext(currentRunnigVideoContext);
    const [currentRunnigVideo, setCurrnetRunningVideo] = value;
    
    const handleCurrentRunningVideo = () =>
    {
        setCurrnetRunningVideo(currentIndex);
        console.log(currentRunnigVideo,"as val");
    }
  return (
    <div className='videoCard_container'>
      <div>
        <img className='videoCard_videoThumbNail' onClick={handleCurrentRunningVideo} src={videoData.thumbNailrSrc} alt='thumb nail'/>
      </div>
      <div className='videoCard_video-details'>
        <div className='videoCard_title'>{videoData.title}</div>
        <div className='videoCard_desc'>{videoData.desc}</div>
        <div className='videoCard_duration'>Chapter 2 | 13 min</div>
      </div>
    </div>
  )
}
