import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "0c5feca50of64837dbc3d78adbt43801";
  //let longitude = props.coordinates.lon;
  //let latitude = props.coordinates.lat;

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=Dubai&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">22°</span>
            <span className="WeatherForecast-temp-min">11°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
