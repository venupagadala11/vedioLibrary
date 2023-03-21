import React from 'react'
import './VideoLibrary.scss';
import videoLibraryData from '../../Data';
import VideoCard from '../../commonComponents/VideoCard/VideoCard';
import video from '../../videos/nature.mp4';
import CurrentRunnigVideo from '../CurrentRunnigVideo/CurrentRunnigVideo';

export default function VideoLibrary() {
  return (
    <div className='videoCard_container'>
      <div class="videoLibrary_videoCards">
        {
            videoLibraryData.map((videoData,index)=> <VideoCard videoData={videoData} currentIndex={index}/>)
        }
      </div>
    </div>
  )
}
