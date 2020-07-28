import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import TrackCard from './TrackCard';
import APIManager from '../Modules/APIManager';

const TrackList = (props) => {
    const [tracks, setTracks] = useState([]);

    //Fetches tracks from database, setTracks updates the state
    const getTracks = () => {
        return APIManager.GetAll("tracks").then(tracksFromAPI => {
            setTracks(tracksFromAPI)
        });
    };

    //Gets the tracks from the API on the component's first render
    useEffect(() => {
        getTracks();
    }, []);

    return(
        <>
            <Button variant="primary" onClick={() => {props.history.push('/Library/New')}}>Add Track</Button>{' '}
            <div>
                {tracks.map(track => 
                    <TrackCard
                        key={track.id}
                        tracks={track}
                        {...props}
                        />
                )}
            </div>
        </>
    );
};

export default TrackList