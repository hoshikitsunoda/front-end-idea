import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '13c2e20bd8b474d73bbd3e0f258ffead';

class App extends Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    icon: '',
    error: ''
  }

  getWeather = async (event) => {
    event.preventDefault()
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_call = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    // const data = await api_call.json()
    console.log(api_call.data)
    if(city && country && api_call.data.cod !== '404') {
      this.setState({
        temperature: api_call.data.main.temp,
        city: api_call.data.name,
        country: api_call.data.sys.country,
        humidity: api_call.data.main.humidity,
        description: api_call.data.weather[0].description,
        icon: api_call.data.weather[0].icon,
        error: ''
      })
    } else {
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please enter the value.'
      })
    }
  }

  clearField = (event) => {
    event.preventDefault()
    document.querySelector('#city').value = ''
    document.querySelector('#country').value = ''
    this.setState({
      temperature: '',
      city: '',
      country: '',
      humidity: '',
      description: '',
      icon: '',
      error: ''
    })
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
                </div>
                <div className="col-xs-7 form-container">
                  <Form 
                    getWeather={this.getWeather} 
                    clearField={this.clearField} />
                  <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    icon={this.state.icon}
                    error={this.state.error} />
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
