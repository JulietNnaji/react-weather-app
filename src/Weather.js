import React from "react";
import './Weather.css';
import "bootstrap/dist/css/bootstrap.css";

export default function Weather (){
    return (
        <div className="Weather">
        <div className ="Wrapper">
                <form className ="formName">
          <div className ="row">
            <div className = "col-4">
           <input type ="search" placeholder="Search for a city..." className ="form"/>
            </div>
            <div className ="col-2">
            <h1>Lagos</h1>
            </div>
            <div className ="col-2">
                <input type ="submit"
                value ="Search" className ="btn btn-primary" />
            </div>
          </div>
          </form>
          <img src= "https://ssl.gstatic.com/onebox/weather/48/sunny.png" alt="sunny" />
          <div className ="degree">  69°C {""}
            <span>
            Partly Cloudy
            </span>
          </div>
          <ul>
            <li>
             Date: July 2 2022
            </li>
            <li>
           Humidity: 24%
            </li>
            <li>
           Wind: 84 km/h
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
