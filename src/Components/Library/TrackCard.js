import React from 'react';
import Iframe from 'react-iframe'
import './TrackCard.css'

const TrackCard = props => {
    return (
        <>
        <div id="track-card">
            <div id={`color-${props.tracks.colorId}`} >
                <div id="track-header">
                    "{props.tracks.name}" by {props.tracks.artist}
                    <button id="w95-delete" onClick={() => props.deleteTrack(props.tracks.id)}>X</button>{' '}
                </div>
                <div className="text-center" id="track-body">
                    <Iframe src={`https://open.spotify.com/embed/track/${props.tracks.uri}`} width="425" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
                </div>
                <div id="track-footer" className="text-center">
                    <button id="w95-details" onClick={() => props.history.push(`/Library/${props.tracks.id}`)}>Details</button>{' '}
                </div>
            </div>
        </div>
        </>
    )
}

export default TrackCard    


