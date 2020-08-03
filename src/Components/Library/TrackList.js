import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import TrackCard from './TrackCard';
import APIManager from '../Modules/APIManager';
import './TrackList.css';

const TrackList = (props) => {
    const [tracks, setTracks] = useState([]);

    //Fetches tracks from database, setTracks updates the state
    const getTracks = () => {
        return APIManager.GetAll("tracks").then(tracksFromAPI => {
            setTracks(tracksFromAPI)
        });
    };

    const deleteTrack = id => {
        APIManager.Delete("tracks", id)
        .then(() => APIManager.GetAll("tracks").then(setTracks));
    };

    //Gets the tracks from the API on the component's first render
    useEffect(() => {
        getTracks();
    }, []);

    return(
        <>
            <Button variant="primary" size="lg" block onClick={() => {props.history.push('/Library/New')}}>Add Track</Button>{' '}
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
    );
};

export default TrackList