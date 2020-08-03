import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Iframe from 'react-iframe'
import './TrackCard.css'

const TrackCard = props => {
    return (
        <>
        <Card id={`color-${props.tracks.colorId}`} className="text-center track-card">
        <Card.Header>{props.tracks.name} by {props.tracks.artist}</Card.Header>
            <Card.Body className="text-center">
                <Iframe src={`https://open.spotify.com/embed/track/${props.tracks.uri}`} width="475" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" onClick={() => props.history.push(`/Library/${props.tracks.id}`)}>Details</Button>{' '}
                <Button variant="warning" onClick={() => props.deleteTrack(props.tracks.id)}>Delete</Button>{' '}
            </Card.Footer>
        </Card>
        </>
    )
}

export default TrackCard    


