import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './Playlist.css'
import APIManager from '../Modules/APIManager';

const Playlist = () => {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        APIManager.GetAll("colors")
        .then(colors => {
            setColors(colors)
        });
    }, []);
    
    return(
        <>
            {colors.map(color =>
            <Button type="button" key={color.id} id={`color-${color.id}`} href={`/Playlist/${color.name}`}></Button>)}
            <div>please kill me</div>
        </>
    )
}
export default Playlist