import React from 'react';
import { Card } from 'react-bootstrap';
import Iframe from 'react-iframe'
import './TrackCard.css'

const TrackCard = props => {
    return (
        <>
        <Card >
            <Card.Body className={`color-${props.tracks.colorId}`}>
                <Iframe src={`https://open.spotify.com/embed/track/${props.tracks.uri}`} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
                {props.tracks.name} by {props.tracks.artist} {props.tracks.description}
            </Card.Body>
        </Card>
        </>
    )
}

export default TrackCard    


