// Make a simple card with a image no hard left and text its right side

import React from 'react';
import './Day.css';


let dayNumToName = (day) => {
    let dayNum = new Date(day).getDay()
    if (dayNum === 1) return "Monday   "
    else if (dayNum === 2) return "Tueday   "
    else if (dayNum === 3) return "WedDay   "
    else if (dayNum === 4) return "Thuday   "
    else if (dayNum === 5) return "Friday   "
    else if (dayNum === 6) return "Satday   "
    else if (dayNum === 7) return "Sunday   "
}

const Day = props => {

    return(
        <div>
            <div id="cardDiv">
                <div id="cardImgDiv">
                    <img id="cardImg" src={require(`../Image/WeatherIcons/${props.main}.png`)} alt="currentWeather"/>
                </div>
                <div id="dayAndWeatherDiv">
                    <p id="dayPara">{dayNumToName(props.day)}</p>
                    <p id="weatherPara">{props.mainWeather}</p>
                </div>
                <div id="cardTempDiv">
                    <p id="cardTemp">{props.temp_max}°/{props.temp_min}°</p>
                </div>
            </div>
        </div>
    );
}

export default Day;