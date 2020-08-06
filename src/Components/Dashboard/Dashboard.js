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
        <div className="dashboard-container">
            <div className="notepad">
                <div className="notepad-header">Color Associations - Notepad</div>
                <div className="notepad-subheader">File Edit Search Help</div>
                <div className="notepad-body">
                    {colors.map(color =>
                        <div key={color.id}>{color.name}: {color.mood}</div>)}
                        <br></br>
                        <br></br>
                        <br></br>
                </div>
            </div>
        </div>
        
      
        </>
    )
}

export default Dashboard