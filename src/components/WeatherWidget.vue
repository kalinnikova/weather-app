<template>
  <div>
    <div v-if="this.$store.state.weatherIsReceived" class="weather-widget">
      <p class="weather-widget__city">{{ weather.city_name }}</p>
      <h2 class="weather-widget__temp">{{ weather.temp }}<span>°</span></h2>
      <p class="weather-widget__status">{{ weather.weather.description }}</p>
    </div>
    <div v-else class="weather-widget">
        <img src="../assets/spinner.svg" alt="">
    </div>
    <div v-if="this.$store.state.forecastIsReceived" class="weather-widget">
        <p class="weather-widget__forecast">{{ forecast }}</p>
    </div>
    <div v-else class="weather-widget">
      <img src="../assets/spinner.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      weather() {
        return this.$store.state.weather
      },
      forecast() {
        return this.$store.state.forecast
      }
    },
    data() {
      return {
       id: ''
      }
    },
    created() {
      this.$store.dispatch('updateWeather');
      this.$store.dispatch('updateForecast');
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
@import '../styles-constants.scss';
.weather-widget {
  display: flex;
  flex-direction: column;
  color: $color-background;
  margin-left: 100px;

  &__city {
    font-size: 20px;
    margin: 0;
  }

  &__status {
    font-size: 20px;
    margin: 0;
  }

  &__temp {
    display: flex;
    align-items: flex-start;
    color: $color-white;
    font-size: 200px;
    font-weight: 200;
    margin: 0;

    span {
      font-size: 50px;
      font-weight: 400;
      margin-top: 35px;
    }
  }
}
</style>
