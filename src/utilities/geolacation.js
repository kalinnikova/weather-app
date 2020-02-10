export let latitude;
export let longitude;

function success(position) {
    const { coords } = position;

    latitude = coords.latitude;
    longitude = coords.longitude;
}

navigator.geolocation.getCurrentPosition(success);
