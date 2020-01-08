import React from 'react';
import './SideWeather.css';

const SideWeather = props => {
    let wordLength = props.temp;
    let marginLength = 0

    if (typeof(wordLength) === "undefined") marginLength = 0;
    else if (wordLength.length === 1) marginLength = 7
    else if (wordLength.length === 2) marginLength = 14
    else if (wordLength.length === 3) marginLength = 21

    return(
        <div id="weatherAndTemperatureMainDiv">
            <div id="weatherConditionDiv">
                <div id="weatherConditionInnerDiv">
                    <img id="weatherConditionImg" src={require(`../Image/WeatherIcons/${props.main}.png`)} alt="weatherCondition"/>
                </div> 
                <p id="weatherCondition"></p>
            </div>
            <div id="weatherTemperatureDiv">
                <div>
                    <p style={{right: marginLength}} id="weatherTemperature">{props.temp}°C</p>
                </div>
                <p id="fillInTheSpaceLeft"></p>
                <p id="fillInTheSpaceRight"></p>
            </div>
        </div>
    );
}

export default SideWeather;