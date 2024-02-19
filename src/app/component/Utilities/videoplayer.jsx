'use client'

import YouTube from "react-youtube";
import { useState } from "react";

const VideoPlayer = ({youtubeId}) => {
    const [video, setVideo] = useState(true);
    const option = {
        width: '300',
        height: '250'
    }

    const handleVideo = () => {
        console.log('clicked')
        setVideo((prev) => !prev)
    }

    const Player = () => {
        return ( 
            <div className="fixed bottom-3 right-3">
                <button onClick={ handleVideo } className="float-right font-medium bg-slate-600 px-2 mb-1 me-1 text-xl">x</button>
                <YouTube videoId={youtubeId} 
                onReady={( e ) => e.target.pauseVideo()}
                opts={option}
                />
            </div>
        );
    }
    return video ? <Player /> : 
    <button className="bg-slate-500 rounded border text-center px-3 py-1 fixed bottom-5 right-5 transition-all hover:bg-color-dark" onClick={handleVideo}>
        Lihat Trailer
    </button>
    
}

export default VideoPlayer;