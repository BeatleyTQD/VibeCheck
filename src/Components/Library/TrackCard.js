import React from 'react';
import { Card } from 'react-bootstrap';
import Iframe from 'react-iframe'

const TrackCard = props => {
    return (<>
        <Card><Card.Body>
        <Iframe src={`https://open.spotify.com/embed/track/${props.tracks.uri}`} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
        {props.tracks.name} by {props.tracks.artist}</Card.Body>
        </Card>
        </>
    )
}

export default TrackCard    


