import axios from 'axios';

const API_KEY = '81bad772d260c81d90edf30506e709c9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

// Ajax request from our API
// dispatch our action, call action creator resonseable for fetching our weather data
// create a single var that holds our action type, use it in our return fetchWeather fx action creator and later reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

// Ajax request to our API url
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // Axios ajax request, returns a promise, instead of jQuery $.get() lib request -> https://github.com/mzabriskie/axios
  const request = axios.get(url);

  console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
