import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './Playlist.css'
import APIManager from '../Modules/APIManager';
import TrackCard from '../Library/TrackCard'

const Playlist = props => {
    const [colors, setColors] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [clickedButton, setClickedButton] = useState();

    const getColors = () => {
        APIManager.GetAll("colors")
        .then(colors => {
            setColors(colors)
        })
    }

    const getTracks = () => {
        APIManager.GetColorPlaylist(clickedButton)
        .then(tracks => {
            setTracks(tracks)
        })
    }

    useEffect(() => {            
        getColors();
        getTracks();
    }, [clickedButton])

    
    const setColorFilter = evt => {
        setClickedButton(evt.target.value)
    }
    
    const deleteTrack = id => {
        APIManager.Delete("tracks", id)
        .then(() => APIManager.GetAll("tracks").then(setTracks));
    };

    
        return(
            <>
            {colors.map(color =>
            <Button type="button" onClick={setColorFilter} key={color.id} value={color.id} id={`color-${color.id}`}></Button>)}
            {tracks.map(track =>
                    <TrackCard
                        key={track.id}
                        tracks={track}
                        deleteTrack={deleteTrack}
                        {...props}
                        />
                )}
        </>
    )
}

export default Playlist