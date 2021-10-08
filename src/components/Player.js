import React, {useRef,useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faPlay, 
    faAngleLeft,
    faAngleRight,
    faPause
} from "@fortawesome/free-solid-svg-icons"

//controls for music player
const Player = ({currentSong,isPlaying,setIsPlaying}) => {

    //useRef/Ref is to refer to react dom element because we cant just use document model in react
    //Ref
    const audioRef = useRef(null);
    //event handlers
    const playSongHandler =  () => {
        if(isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }else{
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime
        const duration = e.target.duration
        //updating current time and duration
        setSongInfo({...songInfo,currentTime:current,duration:duration})
    }

    const getTime = (time) => {
        return(
            Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...setSongInfo, currentTime: e.target.value})
    }

    //state
    const[songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                min={0} 
                max={songInfo.duration} 
                value={songInfo.currentTime} 
                type = "range"
                onChange = {dragHandler}
                />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className = "skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick = {playSongHandler} className = "play" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon className = "skip-forward" size="2x" icon={faAngleRight}/>
            </div>
            {/* onLoadedMetadata calls the function when the element is loaded, on time update calls the functio when the music is playing */}
            <audio onLoadedMetadata={timeUpdateHandler}onTimeUpdate={timeUpdateHandler} ref = {audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player