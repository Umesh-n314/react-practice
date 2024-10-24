import { useEffect, useState } from "react";
import { fetchCall } from "./GetReport";
import DataCard from "./DataCard";

function GetData() {
  const [apiStatus, setApiStatus] = useState("init");
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    // useeffect should return a cleanup function or nothing, so we create a async function inside and call it;
    fetchCall(setApiStatus, setWeatherData);
  }, []);

  if (apiStatus === "pending" || apiStatus === "init") {
    return <p>Loading....</p>;
  }
  if (apiStatus === "error") {
    return <button>Retry</button>;
  }
  return (
    <>
      <DataCard filteredData={weatherData} />
    </>
  );
}

export default GetData;

//why do we need useEffect?
// when u make changes/update in a component , the component is rendered again and again during which if an api call is made in that component, api req/call also called again, so to restrict api call to once we use useEffect Hook.
// And Api calls in react are always called inside useEffect hook

//we can call directly
// (async function () {
//     setApiStatus("pending");
//     // fetch the  geo location
//     const location = await getGeoLocation();
//     //   console.log(location.coords)
//     // fetch the weather report
//     const { success, data } = await fetchWeatherReport(location.coords);
//     if (success) {
//       setWeatherData(data);
//       setApiStatus(success);
//     } else {
//       setApiStatus(success);
//     }
//   })();
