import React, { useState} from "react";
import './Weather.css';
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Audio } from  'react-loader-spinner';
import CurrentDate from "./CurrentDate";
import TemperatureUnits from "./TemperatureUnits";

export default function Weather (props){
  let [loaded, setLoader] = useState (false);
  let [values, setValues] =useState(null);
  let [citySearch, setCityName] = useState (props.cityName);
  
  function showTemperature(response){
  
setValues({
 temperature: response.data.main.temp,
 humidity: response.data.main.humidity,
 city: response.data.name,
 wind: response.data.wind.speed,
 pressure: response.data.main.pressure,
 date: new Date (response.data.dt * 1000),
 description: response.data.weather[0].description,
 weatherIcon: `http://openweathermap.org/img/wn/${
  response.data.weather[0].icon
}@2x.png`
});
setLoader (true);
  }
  
function search (){
  let apiKey = "0bef54fbf2f25ff0f6335be419abd9a2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

  function submitForm (event){
    event.preventDefault ();
    search ();
  }
  
function changeCityName (event){
setCityName (event.target.value);
}

if (loaded){
  return (
        <div className="Weather">
        <div className ="Wrapper">
                <div className ="formName">
                  <form onSubmit={submitForm}>
          <div className ="row">
            <div className = "col-6">
           <input type ="search" placeholder="Search for a city..." className ="ms-4" 
           onChange={changeCityName}/>
            </div>
        
            <div className ="col-6">
                <input type ="submit"
                value ="Search" className ="btn btn-primary w-50" 
                />
            </div>
          </div>
          </form>
          
            <h1 className ="mt-3 mb-0 text-capitalize">{values.city}</h1>
         
          </div>
          <img src= {values.weatherIcon} className="image" alt={values.description} />
          <div className="position">
          <TemperatureUnits celsius = {values.temperature} />
            <span className ="description text-capitalize">
            {values.description}
            </span>
          </div>
          <ul className="lists mt-3">
            <li>
          Last updated: <CurrentDate date={values.date} />
            </li>
            <li>
           Wind: {Math.round(values.wind)}km/h
            </li>
            <li>
           Humidity: {values.humidity}%
            </li>
            <li>
           Pressure: {values.pressure}hPa
            </li>
          </ul>
          </div>
         <footer className="owner">
              <a href="https://github.com/JulietNnaji/react-weather-app" target="blank">
                Open-source code </a
              >
              by Juliet Nnaji
            </footer>
        </div>
      );
    
}else{
  search();
    return (<p> 
    <Audio
        height = "80"
        width = "1000"
        radius = "9"
        color = 'green'
        ariaLabel = 'three-dots-loading'     
        wrapperStyle
        wrapperClass
      /></p> );
}  
  }