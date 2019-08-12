import React from 'react';
import Header from './header';
import Form from './form-body';
import Weather from './weather-output';
import './App.css';
const my_key = '7792b3a978cec7562cb216e26befc45c';
const WeatherIcon = <img alt='Weather condition' src='http://openweathermap.org/img/wn/50d.png' />; 

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${my_key}&units=metric`);
    const response = await api_call.json();

    // console.log(response);

    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        error: ''
      });
    } else {
      this.setState({
        error: 'Please enter you country and city to Watch'
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form loadWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          icon={this.state.icon}
          error={this.state.error} />
          {WeatherIcon}
      </div>
    );
  }
};

export default App;
