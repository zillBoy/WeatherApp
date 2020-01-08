import React from 'react';
import './MainScreen.css';

const MainScreen = props => {
    return(
        <div>
            <p id="mainScreenLocation">{props.cityName}</p>
            <br />
            <div id="mainScreenImageDiv">
                <img id="mainScreenImage" src={require('../Image/singapore.jpg')} alt="mainWeatherPicture"/>
            </div>
        </div>
    );
}

export default MainScreen;