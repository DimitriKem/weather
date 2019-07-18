import React from 'react';
import styles from './app.module.css';

import 'babel-polyfill';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Titles from "./../components/Titles";
import Form from "./../components/Form";
import Weather from "./../components/Weather";

const API_KEY = "d05f1216f3f9ed37047e4cb2683adc49";

Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
class App extends React.Component {
  state = {
    data: new Date(),
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  handleChangeData = (data) => {
    this.setState({
      ...this.state,
      data
    })
  }

  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //const parsedUnixTime = this.data.getUnixTime;
    //http://history.openweathermap.org/data/2.5/history/city?q={city ID},{country code}&type=hour&start={start}&cnt={cnt}
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                  <DatePicker
                      selected={this.state.data}
                      onChange={this.handleChangeData}
                    />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
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
};

export default App;