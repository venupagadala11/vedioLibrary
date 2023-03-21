import React from 'react';
import './App.scss';
import CurrentRunnigVideo from './Components/CurrentRunnigVideo/CurrentRunnigVideo';
import VideoLibrary from './Components/VideoLibrary/VideoLibrary';
import { createContext, useState } from "react";
import video from './videos/nature.mp4';
import videoLibraryData from './Data';

export const currentRunnigVideoContext= createContext(null);

export default function App(){
  const [currentRunnigVideo, setCurrnetRunningVideo] = useState(0);
  const value = [currentRunnigVideo, setCurrnetRunningVideo]
    return (
      <currentRunnigVideoContext.Provider value={value}>
        <div>
        <CurrentRunnigVideo/>
        <VideoLibrary/>
        </div>
      </currentRunnigVideoContext.Provider>
    )
  }

  
