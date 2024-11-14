import { useState } from "react";

const now = new Date();
// const options = {
//   weekday: "long",
//   hour: "2-digit",
//   minute: "2-digit",
//   hour12: true,
// };
const hrs = now.getHours();
const minutes = now.getMinutes();
const time = `${hrs > 12 ? hrs - 12 : hrs}:${
  minutes > 9 ? minutes : "0" + minutes
} ${hrs > 12 ? "PM" : "AM"}`;
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];

const DataCard = ({ filteredData }) => {
  //   console.log(filteredData);
  const [units, setUnits] = useState("c");
  return (
    <div className="card">
      <div className="city">
        <h3>City: {filteredData.city}</h3>
        <p>Climate: {filteredData.description}</p>
      </div>
      <div className="child">
        <div className="left">
          <img src="weather_img.png" alt="weather" />
          <div className="temperature-div">
            <h1>
              {units === "c"
                ? (filteredData.temperature - 273.15).toFixed(2)
                : ((filteredData.temperature - 273.15) * (9 / 5) + 32).toFixed(
                    2
                  )}
            </h1>
            <button
              disabled={units === "c"}
              onClick={() => {
                if (units === "f") {
                  setUnits("c");
                }
              }}
            >
              °C
            </button>
            <button
              disabled={units === "f"}
              onClick={() => {
                if (units === "c") {
                  setUnits("f");
                }
              }}
            >
              °F
            </button>
          </div>
          <div>
            <p>Humidity: {filteredData.humidity} %</p>
            <p>
              Wind:{" "}
              {units === "f"
                ? (filteredData.wind_speed * 3.6).toFixed(2) + " km/h"
                : filteredData.wind_speed + " m/s"}
            </p>
          </div>
        </div>
        <div className="right">
          <h3>Weather</h3>
          <p>
            {days[now.getDay()]} , {time}
          </p>
          <p>{filteredData.main}</p>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
