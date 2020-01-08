import React from 'react';
import './AddLocation.css';

const AddLocation = props => {
    return(
        <div id="add-location-reverse-print">
            <div id="add-location-div">
                <div id="weather-data-content-main-div">
                    <div id="weather-data-image-main-div">
                        <div id="weather-data-image-div">
                            <img id="weather-data-image" src={require(`../Image/WeatherIcons/${props.main}.png`)} alt="weatherCondition"/>
                        </div>
                    </div>

                    <div id="weather-data-content-div">
                        
                        <div>
                            <p id="weather-data-temperature">{props.temp}°</p>
                        </div>

                        <span id="vertical-big-line"></span>

                        <div id="weather-data-city-country-div">
                            <p id="weather-data-city">{props.city}</p>
                            <p id="weather-data-country">{props.country}</p>
                        </div>

                    </div>
                </div>

                <div id="lower-data-div">
                    <div id="lower-data-humidity-div">
                        <p id="lower-data-humidity">Humidity {props.humidity}%</p>
                    </div>

                    <span id="vertical-small-line"></span>
                        
                    <div id="lower-data-direction-div">
                        <p id="lower-data-direction">{props.degree}</p>
                    </div>

                    <span id="vertical-small-line"></span>

                    <div id="lower-data-speed-div">
                        <p id="lower-data-speed">{props.speed}km/h</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddLocation;
