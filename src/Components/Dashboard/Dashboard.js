import React, {useEffect, useState} from 'react';
import APIManager from '../Modules/APIManager';
import './Dashboard.css';

const Dashboard = props => {
    const [colors, setColors] = useState([]);

    const getColorAssociations = () => {
        return APIManager.GetAll("colors").then(colors => {
            setColors(colors)
        })
    }

    useEffect(() => {
        getColorAssociations();
    }, []);

    return (
        <>
                        {colors.map(color =>
                            <div key={color.id}>{color.name}: {color.mood}</div>)}
        
        <div className="random-tracks-container">
        </div>
        </>
    )
}

export default Dashboard