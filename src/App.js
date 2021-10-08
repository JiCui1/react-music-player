import React, {useState} from 'react'
import './styles/app.scss'
import Player from './components/Player'
import Song from './components/Song'
import data from './util'
import Libray from './components/Library'


function App() {

  //state
  const [songs,setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Song currentSong = {currentSong}/>
      <Player
      setIsPlaying = {setIsPlaying}
      isPlaying = {isPlaying} 
      currentSong = {currentSong}/>
      <Libray songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
