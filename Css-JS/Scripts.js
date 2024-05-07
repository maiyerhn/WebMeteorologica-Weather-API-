window.addEventListener("load", () => {
    let lon;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid={66b40fc04c4573ca11f70b421f5e367e}`;
            fetch(url)
            .then{ response => {return response.json() }}
            .then{data => ()}
        })
    }
});