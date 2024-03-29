import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5f472b7acba333cd8a035ea85a0d4d4c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter city..."
          type="text"
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <h2>{data.name}</h2>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.round(data.main.temp)}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>Feels like</p>
            {data.main ? (
              <p className="bold">{Math.round(data.main.feels_like)}°F</p>
            ) : null}
          </div>
          <div className="humidity">
            <p>Humidity</p>
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          </div>
          <div className="wind">
            <p>Wind speed</p>
            {data.wind ? (
              <p className="bold">{Math.round(data.wind.speed)} MPH</p>
            ) : null}
          </div>
        </div>
        <footer>
          This project was coded by
          <a href="https://github.com/mimi-netizen"> Celyne Kydd </a>
          and is on
          <a href="https://github.com/mimi-netizen/react-homework-4">
            {" "}
            GitHub{" "}
          </a>
          and hosted on
          <a href="https://master--poetic-mooncake-edc3a9.netlify.app//">
            {" "}
            Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
