import axios from 'axios';
import { CURRENT_WEATHER, FORECAST } from '@/constants';

const apiWeather = axios.create({
    baseURL: CURRENT_WEATHER,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

const apiForecast = axios.create({
    baseURL: FORECAST,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getWeather() {
        return apiWeather.get();
    },
    getForecast() {
        return apiForecast.get();
    }
};
