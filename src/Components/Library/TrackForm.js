import React, { useState } from 'react';
import APIManager from '../Modules/APIManager';
import './TrackForm.css'

const TrackForm = props => {
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

    //Grabs colors from database to map into user track creation form
    APIManager.GetAll("colors").then(colors => {
        setColors(colors)
    });

    const constructNewTrack = evt => {
        evt.preventDefault();
        if (track.name === "" || track.artist === "" || track.uri === "" || track.colorId === 0 || track.description === "") {
            window.alert("Please fill out entire form");
        } else {
            setIsLoading(true);
            APIManager.Save("tracks",track)
            .then(() => props.history.push("/Library"));
        }
    };

    return (
            <>
        <form>
            <fieldset>
            <div className="new-track-container">
                <div className="track-form">
                <div className="new-track-header">Add a Track</div>
                <label htmlFor="name">Track Name:</label>
                <input
                    type="text"
                    onChange={handleFieldChange}
                    id="name"/>
                
                <label htmlFor="artist">Artist:</label>
                <input
                    type="text"
                    onChange={handleFieldChange}
                    id="artist"/>

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
                <label htmlFor="uri">Spotify URI:</label>
                <input
                    type="text"
                    onChange={handleURIFieldChange}
                    id="uri"/>

                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    onChange={handleFieldChange}
                    id="description"/>
            <button className="track-submit" onClick={constructNewTrack}>Add Track</button>{' '}
            </div>
            </div>
            </fieldset>
        </form>
        </>
    )
}

export default TrackForm