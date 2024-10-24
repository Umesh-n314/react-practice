const API_key = process.env.REACT_APP_API_KEY;
// console.log(API_key);

export function getGeoLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function fetchWeatherReport({ latitude, longitude }) {
  // console.log(latitude,longitude)
  try {
    const respone = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`
    );
    const weatherReport = await respone.json();
    const filteredData = {
      temperature: weatherReport.main.temp,
      temp_feel: weatherReport.main.feels_like,
      humidity: weatherReport.main.humidity,
      wind_speed: weatherReport.wind.speed,
      city: weatherReport.name,
      main: weatherReport.weather[0].main,
      description: weatherReport.weather[0].description,
    };
    return { success: true, data: filteredData };
  } catch (error) {
    alert(error.message);
    return { success: false };
  }
}

export async function fetchCall(setApiStatus, setWeatherData) {
  setApiStatus("pending");
  // fetch the  geo location
  const location = await getGeoLocation();
  //   console.log(location.coords)
  // fetch the weather report
  const { success, data } = await fetchWeatherReport(location.coords);
  if (success) {
    setWeatherData(data);
    setApiStatus(success);
  } else {
    setApiStatus(success);
  }
}
