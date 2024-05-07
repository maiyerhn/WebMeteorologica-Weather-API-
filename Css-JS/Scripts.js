window.addEventListener("load", () => {
    let lon;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = `https://my.meteoblue.com/packages/basic-15min_basic-day_current_clouds-1h?apikey=xPLIVU8rANJpvtFq&lat=${lat}&lon=${lon}&asl=279&format=json`;
            fetch(url)
            .then( response => {return response.json() })
            .then(data => {
                console.log(data);
            })
        })
    }
});