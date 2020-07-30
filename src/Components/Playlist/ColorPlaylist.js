import React, { useState, useEffect } from 'react';
import APIManager from '../Modules/APIManager';
import TrackCard from '../Library/TrackCard';

const ColorPlaylist = props => {
    const [color, setColor] = useState({});
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        APIManager.GetColorPlaylist(props.match.params.colorId)
        .then(result => {
            setColor(result);
            setTracks(result.tracks);
        })
    }, [])

    return(
        <div>
            {tracks.map(track =>
                <TrackCard
                    key={track.id}
                    track={track}
                    {...props}
                    />
                    )}
        </div>
    )
}

export default ColorPlaylist