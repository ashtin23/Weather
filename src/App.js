import React from 'react';
import './App.css';
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

const apiKey = 'c296405ed2c9ce77e28d89d5d5b86fde';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      description: undefined,
      humidity: undefined,
      wind: undefined,
      clouds: undefined,
      sunrise: undefined,
      sunset: undefined,
      error: ''
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=
    ${city},${country}&appid=${apiKey}&units=imperial`);
    const data = await apiCall.json();    
    if(city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        clouds: data.clouds.all,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        error: ""
    })
    }else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        humidity: undefined,
        wind: undefined,
        clouds: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Please enter a valid city and/or country."
    })
    }
    }
  
  
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  humidity={this.state.humidity}
                  wind={this.state.wind}
                  clouds={this.state.clouds}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
}

export default App;
