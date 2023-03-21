import React, {useContext, useEffect, useRef, useState} from 'react';
import videos from '../../videos/video-1.mp4';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DescriptionIcon from '@mui/icons-material/Description';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import { currentRunnigVideoContext } from '../../App';
import videoLibraryData from '../../Data';
export default function CurrentRunnigVideo({video}) {
    const [playVideo, setplayVideo]= useState(true);  //to make video play and pause here we maintain its status in this state
    const videoRef = useRef();   //to store the video reference 
    const value = useContext(currentRunnigVideoContext);  //consuming the value(it has video source) from the currentRunningVideo context and using it here to play the video
    const[flag,setFlag] = useState(true);
    const [cVideo, setCVideo] = useState(videos)
    // set the video status play
    const handlePlay=()=>
    {
        videoRef.current.play();
        setFlag(!flag);
        console.log(flag,'source',value[0],"updated",videoLibraryData[value[0]].videoSrc);
    }

    useEffect(()=>{
        console.log(videoLibraryData[value[0]].videoSrc,"pr")
        setCVideo(videoLibraryData[value[0]].videoSrc);

    },[value[0]])

    useEffect(()=>{
        videoRef.current.load()
    },[cVideo])



    // set the video status pause
    const handlePause =()=>
    {
        videoRef.current.pause();
    }
    return (
        <div>
            {/* video tag to provide video via its source  and store its reference in videoRef*/}
            <video width="100%" height="320" ref={videoRef} controls loop>
                <source src= {cVideo} type="video/mp4"  />
            </video>
            
            {/* video title and its description */}
            <h2 className='currentRunningVideo_title'>{videoLibraryData[value[0]].title}</h2>
            <div className='currentRunningVideo_desc'>{videoLibraryData[value[0]].desc}</div>
            <div className='currentRunningVideo_duration'>{videoLibraryData[value[0]].videoSrc}</div>

            {/* button to toggle the videp status */}
            <div className='currentRunningVideo_play'>
                <button id='currentRunningVideo_status-button' onClick={()=>{setplayVideo(!playVideo)}}>{playVideo?<span className='currentRunningVideo_video-status' onClick={handlePlay}> <PlayArrowIcon/>Play</span>:<span className='currentRunningVideo_video-status' onClick={handlePause}> <PauseIcon/>Pause</span>}</button> 
            </div>

            {/* some static options about the video */}
            <div className='currentRunningVideo_options'>
                <div className='currentRunningVideo_option'>
                    <DescriptionIcon/>
                    <div>Notes</div>
                </div>
                <div className='currentRunningVideo_option'>
                    <FavoriteBorderIcon/>
                    <div>Like</div>
                </div>

                <div className='currentRunningVideo_option'>
                    <DownloadIcon/>
                    <div>Download</div>
                </div>
                <div className='currentRunningVideo_option'>
                    <ShareIcon/>
                    <div>Share</div>
                </div>
            </div>
            <div className='currentRunningVideo_divider'></div>
            <botton onClick={()=>console.log(value,value[0].videoSrc,video)}>testing</botton>
        </div>
    )
}
