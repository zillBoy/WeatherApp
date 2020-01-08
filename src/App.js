import React, { Component } from 'react';
import './App.css';
import MainScreen from './MainScreen/MainScreen';
import Day from './Day/Day';
import SideWeather from './SideWeather/SideWeather';
import PlacesToVisit from './PlacesToVisit/PlacesToVisit';
import ArtMuseum from './Discover/ArtMuseum';
import AddLocation from './AddLocation/AddLocation';
import AddLocationEvent from './AddLocationEvent/AddLocationEvent';

class App extends Component {

  state = {
    weatherData: null,
    cleanWeatherData: [],
    addLocationCount: 0,
    minMax: false,
    weatherListData: [],
  }

  componentDidMount() {
    let count = document.getElementById("reversePrint").childNodes.length;
    this.setState({addLocationCount: count})
  }

  degreeToCompassDirection = degree => {
    if (degree > 0 && degree < 45) return "North"
    else if  (degree >= 45 && degree < 90) return "North East"
    else if  (degree >= 90 && degree < 135) return "East"
    else if  (degree >= 135 && degree < 180) return "South East"
    else if  (degree >= 180 && degree < 225) return "South"
    else if  (degree >= 225 && degree < 270) return "South West"
    else if  (degree >= 270 && degree < 315) return "West"
    else if  (degree >= 315 && degree < 360) return "North West"
    else if (degree === 360) return "North"
  }

  onDataChanged = (data) => {
    let dateTime = 0

    let filterData = data.list.filter(dt => {
      let date = new Date(dt.dt_txt).getDate()
      if (date > dateTime) {
        dateTime = date
        return true
      } else return false 
    })

    filterData.map((i, index) => {
      return filterData[index].city = data.city
    })

    this.setState({
      weatherData: data, 
      cleanWeatherData: filterData.slice(0, 3), 
      addLocationCount: this.state.weatherListData.length + 1, 
      weatherListData: this.state.weatherListData.concat(filterData.slice(0, 1))
    })

  }

  render() {

    let appSize = {};
    let minMaxStyles = {};

    this.state.minMax ?  
    appSize = {
      margin: '100px',
      marginTop: '30px',
      backgroundColor: 'white',
      borderRadius: '35px',
      boxShadow: '0 5px 35px 0 rgb(179, 179, 179)',
      marginBottom: '0px'
    } : appSize = {}

    this.state.minMax ? minMaxStyles = { marginLeft: '1290px',} : minMaxStyles = {marginLeft: '1500px'};

    return (
      <div style = {appSize} id="justTesting">

        <div>
          <button style={minMaxStyles} onClick={() => this.setState({minMax: !this.state.minMax})} id="max-min-app-size"/>
        </div>

        <div>
          {this.state.cleanWeatherData.length === 0 ? <SideWeather main="Clear" /> : <SideWeather main={this.state.cleanWeatherData[0].weather[0].main} temp={(this.state.cleanWeatherData[0].main.temp - 273).toFixed()}/>}
        </div>

        <div>
          {this.state.cleanWeatherData.length === 0 ? <MainScreen cityName={""}/> : <MainScreen cityName={this.state.cleanWeatherData[0].city.name}/>}
        </div>
        
        <div id="paraHeadingDiv"> 
            <p className="BoldPara">3 Days <span className="lightPara">Forecast</span></p>           
            <p className="BoldPara">Places to <span className="lightPara">Visit</span></p>           
            <p className="BoldPara">Review <span className="lightPara">Rate</span></p>
            <p className="BoldPara">Add <span className="lightPara">Location</span></p>
        </div>


        <div id="ContentDiv">
          
          <div id="Day">
            {this.state.cleanWeatherData.length === 0 ? [] :
            this.state.cleanWeatherData.map((data, index) => {
              return <Day 
              temp_max={(data.main.temp_max - 273).toFixed()}
              temp_min={(data.main.temp_min - 273).toFixed()}
              day={data.dt_txt}
              main={data.weather[0].main}
              key={index}
              />
            })
            }
          </div>
          <div id="PlaceToVisit">
            <PlacesToVisit />
          </div>
          <div id="ArtMuseum">
            <ArtMuseum />
          </div>
          
          <div>
            <div style={{marginTop: `calc(${this.state.addLocationCount} * -72px - (${this.state.addLocationCount - 1} * 44px))`}} id="reversePrint">
                {
                  this.state.weatherListData.map((data, index) => {
                    return <AddLocation
                      temp={(data.main.temp - 273).toFixed()} 
                      city={data.city.name}
                      country={data.city.country}
                      humidity={data.main.humidity}
                      degree={this.degreeToCompassDirection(data.wind.deg)}
                      speed={(data.wind.speed * 3.6).toFixed(1)}
                      main={data.weather[0].main}
                      key={index}/>
                  })
                }                             
            </div>
            <div id="AddLocationEvent">
              <AddLocationEvent onDataChanged={this.onDataChanged.bind(this)} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;