import React from 'react'

//shows song, name, artist and picture, song info
const LibrarySong = ({song, songs, setCurrentSong, id}) => {

    const songSelectHandler = () => {
        //filter the songs array to get the song that we clicked on 
        const selectedSong = songs.filter((state) => state.id === id)
        setCurrentSong(selectedSong[0])
    }

    return(
        <div onClick = {songSelectHandler} className="library-song">
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        

        </div>
    )
}

export default LibrarySong