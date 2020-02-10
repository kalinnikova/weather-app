import { latitude, longitude } from './utilities/geolacation';

const API_KEY = '96c1f07f1a0f4be7bbf3a09a53d7df29';
const CURRENT_WEATHER = `https://api.weatherbit.io/v2.0/current?city=Tver,&lang=RU&lat=${latitude}&lon=${longitude}&key=${API_KEY}`;
const FORECAST = `https://api.weatherbit.io/v2.0/forecast/daily?city=Tver,&lang=RU&lat=${latitude}&lon=${longitude}&key=${API_KEY}`;

export { API_KEY, CURRENT_WEATHER, FORECAST };
