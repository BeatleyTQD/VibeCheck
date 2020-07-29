import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import APIManager from '../Modules/APIManager';

const TrackDetail = props => {
    const [track, setTrack] = useState({name:"", artist:"", uri:"", description:"", colorId: 0});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        APIManager.GetById("tracks", props.trackId)
        .then(track => {
            setTrack({
                name: track.name,
                artist: track.artist,
                uri: track.uri,
                description: track.description,
                colorId: track.colorId
            });
            setIsLoading(false);
        });
    }, [props.trackId]);

    if (track.name !== undefined){
        return (
            <div>hello world</div>
        )
    } else {
        return <Redirect to="/" />
    }
};

export default TrackDetail
