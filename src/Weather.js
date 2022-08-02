import React from "react";
import './Weather.css';
import "bootstrap/dist/css/bootstrap.css";

export default function Weather (){
    return (
        <div className="Weather">
        <div className ="Wrapper">
                <div className ="formName"><form>
          <div className ="row">
            <div className = "col-6">
           <input type ="search" placeholder="Search for a city..." className ="ms-4"/>
            </div>
        
            <div className ="col-6">
                <input type ="submit"
                value ="Search" className ="btn btn-primary w-50" />
            </div>
          </div>
          </form>
          
            <h1 className ="mt-3">Lagos</h1>
         
          </div>
          <img src= "https://ssl.gstatic.com/onebox/weather/48/sunny.png" className="image" alt="sunny" />
          <div className="position">
            <strong className ="degree">  69 </strong>
          <span className="temperature">°C | °F </span> {""}
            <span className ="description">
            Partly Cloudy
            </span>
          </div>
          <ul className="lists mt-3">
            <li>
             Last updated:  Tues, 2 Aug; 13:19
            </li>
            <li>
           Humidity: 24%
            </li>
            <li>
           Wind: 84 km/h
            </li>
            <li>
           Precipitation: 2%
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
    }
