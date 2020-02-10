import Vue from 'vue';
import Vuex from 'vuex';

import service from '~/services/service.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        weather: {},
        forecast: {},
        weatherIsReceived: false,
        forecastIsReceived: false
    },
    mutations: {
        UPDATE_WEATHER(state) {
            service
                .getWeather()
                .then(response => {
                    state.weather = response.data.data[0];
                    state.weatherIsReceived = true;
                    console.log(response);
                })
                .catch(error => {
                    console.log('There was an error:', error.response);
                    state.weatherIsReceived = false;
                });
        },
        UPDATE_FORECAST(state) {
            service
                .getForecast()
                .then(response => {
                    state.forecast = response.data.data[0];
                    state.forecastIsReceived = true;
                    console.log(response);
                })
                .catch(error => {
                    console.log('There was an error:', error.response);
                    state.forecastIsReceived = false;
                });
        }
    },
    actions: {
        updateWeather(context) {
            context.commit('UPDATE_WEATHER');
        },
        updateForecast(context) {
            context.commit('UPDATE_FORECAST');
        }
    }
});
