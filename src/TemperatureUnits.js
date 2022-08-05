import React, {useState} from "react";
import './Temperature.css';

export default function TemperatureUnits (props){
    let [unit, setUnits] = useState ("celsius");
function fahrenheitTemperature (event){
    event.preventDefault();
    setUnits ("fahrenheit");
}

function celsiusTemperature (event){
    event.preventDefault();
    setUnits ("celsius");
}

    if (unit ==="celsius"){
    return (
        <span>
             <strong className ="degree">  {Math.round (props.celsius)} </strong>
          <span className="temperature">°C |{""} <a href ="/" onClick={fahrenheitTemperature} > °F </a> </span> 
        </span>
    );
} else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
        <span>
             <strong className ="degree">  {Math.round (fahrenheit)} </strong>
          <span className="temperature">  <a href ="/" onClick={celsiusTemperature} > °C </a> |{""} °F </span> 
        </span>
    );
}
}