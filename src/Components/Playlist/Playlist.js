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

    //Sends color id based on user selection into API call
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

    //Gets user selected color id for playlist generation
    const setColorFilter = evt => {
        setClickedButton(evt.target.value)
    }
    
    const deleteTrack = id => {
        APIManager.Delete("tracks", id)
        .then(() => APIManager.GetColorPlaylist(clickedButton).then(setTracks));
    };

    
        return(
            <>
            <div className="color-button-container">
            {colors.map(color =>
            <button type="button" onClick={setColorFilter} key={color.id} value={color.id} id={`button-color-${color.id}`}></button>)}
            </div>
            <div className="TrackList-Container">
            {tracks.map(track =>
                    <TrackCard
                        key={track.id}
                        tracks={track}
                        deleteTrack={deleteTrack}
                        {...props}
                        />
                        )}
            </div>
        </>
    )
}

export default Playlist