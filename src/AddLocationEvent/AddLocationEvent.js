import React, { Component } from 'react';
import './AddLocationEvent.css';

class AddLocationEvent extends Component {
    
    state = {
        showSearch: false,
        weatherSearch: ""
    }

    onButtonClick = () => {
        this.setState({showSearch: true})
    }

    onGetWeatherData = () => {
        let APPID = "" // Add your APPID
        let url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.weatherSearch}&APPID=${APPID}`;
        
        fetch(url)
        .then(res => {
            if(res.ok) return res.json()
            throw new Error('city not found')
        })
        .then(weatherData => {this.props.onDataChanged(weatherData) })
        .catch(err => alert(err.message))

        this.setState({
            showSearch: false,
            weatherSearch: ""
        });
    }

    render(){
        return(
            <div id="add-location-event-biggest-div">
                <div id="add-location-event-main-div">
                    
                    
                <div>
                    {this.state.showSearch ? 
                        <div id="add-locaiton-search-field-div">
                            <input value={this.state.weatherSearch} onChange={event => this.setState({weatherSearch: event.target.value})} id="add-locaiton-search-field" />
                            <br />
                            <button onClick={this.onGetWeatherData} id="add-locaiton-search-button"></button>
                        </div>
                    :
                        <div id="add-location-event-search-div">
                            <button onClick={this.onButtonClick} id="add-location-event-search">Add Location</button>
                        </div>
                    }
                    </div>

                    <div id="add-location-event-img-div">
                        <img id="add-location-event-img" src={require('../Image/addlocation.png')} alt="addlocation"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddLocationEvent;