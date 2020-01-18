import Axios from 'axios';
import { API_KEY } from '../constants';

const getWeatherInfo = async (lat, long, cb) => {
  const res = await Axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat,
      lon: long,
      appid: API_KEY,
      lang: 'pt',
      units: 'metric',
    },
  });
  cb(res.data);
};

export default getWeatherInfo;
