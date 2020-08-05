import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Iframe from 'react-iframe'
import "./TrackDetail.css"
import APIManager from '../Modules/APIManager';

const TrackDetail = props => {
    const [track, setTrack] = useState({name:"", artist:"", uri:"", description:"", colorId: 0, id:0});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        APIManager.GetById("tracks", props.trackId)
        .then(track => {
            setTrack({
                name: track.name,
                artist: track.artist,
                uri: track.uri,
                description: track.description,
                colorId: track.colorId,
                id: track.id
            });
            setIsLoading(false);
        });
    }, [props.trackId]);

    if (track.name !== undefined){
        return (
            <div className="details-container">
                <div id={`color-${track.colorId}`} className="details-card">
                <div className="track-header">
                    "{track.name}" by {track.artist}
                </div>
                    <div className="details-card-top">
                        <div className="details-spotify">
                            <Iframe src={`https://open.spotify.com/embed/track/${track.uri}`} width="400" height="480" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
                        </div>
                        <div className="details-description">
                            <div>{track.description}</div>
                        </div>
                    </div>
                    <div className="details-card-bottom">
                        <button className="edit-button" onClick={() => props.history.push(`/Library/`)}>Go Back</button>
                        <button className="edit-button" onClick={() => props.history.push(`/Library/${track.id}/Edit`)}>Edit</button>{' '}
                    </div>
                </div>
            </div>
        )
    } else {
        return <Redirect to="/" />
    }
};


export default TrackDetail
