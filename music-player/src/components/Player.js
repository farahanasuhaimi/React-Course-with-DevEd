import React, {useRef, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

const Player = ({ isPlaying, setIsPlaying, currentSong}) => {
    // ref(s) -- for html references
    const audioRef = useRef(null);

    // function handler(s)
    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
    }
    // state(s)
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null,
    });

    return (
        <div className="player">
           <div className="time-control">
               <p>Start Time</p>
               <input type="range"/>
               <p>End Time</p>
           </div>
           <div className="play-control">
            <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft} />    
            <FontAwesomeIcon onClick={playSongHandler} className='play' size='2x' icon={faPlay} />    
            <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight} />    
           </div>
           <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player;