import React, { useState, useEffect } from 'react';
import APIManager from "../Modules/APIManager";


const TrackEditForm = props => {
    const [track, setTrack] = useState({userId: parseInt(sessionStorage.activeUserID), name:"", artist:"", uri:"", description:"", colorId: 0});
    const [colors, setColors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...track };
        stateToChange[evt.target.id] = evt.target.value;
        setTrack(stateToChange);
    };

    const handleColorFieldChange = evt => {
        const stateToChange = { ...track };
        stateToChange[evt.target.id] = parseInt(evt.target.value);
        setTrack(stateToChange);
    };

     //Splits Spotify URI to grab the part we actually need - the string associated with the specific track
     const handleURIFieldChange = evt => {
        const stateToChange = { ...track };
        stateToChange[evt.target.id] = evt.target.value.split(":")[2];
        setTrack(stateToChange)
    };

    const updateExistingTrack = evt => {
        evt.preventDefault();
        setIsLoading(true);
        
        const editedTrack = {
            id: props.match.params.trackId,
            name: track.name,
            artist: track.artist,
            uri: track.uri,
            description: track.description,
            userId: parseInt(track.userId),
            colorId: parseInt(track.colorId)
        };

        APIManager.Update("tracks", track.id, editedTrack)
        .then(() => props.history.push(`/Library/${track.id}`))
    };

    useEffect(() => {
        APIManager.GetById("tracks", props.match.params.trackId)
        .then(track => {
            //grabs colors for selection in edit form
            APIManager.GetAll("colors").then(colors =>{
                setColors(colors)
            });
            setTrack(track);
            setIsLoading(false);
        });
    }, []);
    
    return (
        <>
        <form>
            <fieldset>
                <div className="new-track-container">
                    <div className="track-form">
                        <div className="new-track-header">Add a Track</div>
                        <div className="track-input-field">
                            <div className="track-text-field">
                                <label htmlFor="name">Track Name:</label>
                                <input
                                    type="text"
                                    onChange={handleFieldChange}
                                    value={track.name}
                                    id="name"/>
                            </div>

                            <div className="track-text-field">
                                <label htmlFor="artist">Artist:</label>
                                <input
                                    type="text"
                                    onChange={handleFieldChange}
                                    value={track.artist}
                                    id="artist"/>
                            </div>

                            <div className="track-text-field">
                                <label htmlFor="color">Color:</label>
                                <select
                                    id="colorId"
                                    value={parseInt(track.colorId)}
                                    onChange={handleColorFieldChange}
                                ><option>Select a Color</option>
                                    {colors.map(color =>
                                        <option key={color.id} value={color.id}>
                                            {color.name}
                                        </option>
                                        )}
                                </select>
                            </div>
                            
                            <div className="track-text-field">
                                <label htmlFor="uri">Spotify URI:</label>
                                <input
                                    type="text"
                                    onChange={handleURIFieldChange}
                                    value={track.uri}
                                    id="uri"/>
                            </div>

                            <div className="track-text-field">
                                <label htmlFor="description">Description:</label>
                                <textarea rows="4" cols="50"
                                    type="text"
                                    onChange={handleFieldChange}
                                    value={track.description}
                                    id="description"/>
                            </div>

                            <div>
                                <button className="track-submit"  disabled={isLoading} onClick={updateExistingTrack}>Save Track</button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
        </>
    )
}

export default TrackEditForm