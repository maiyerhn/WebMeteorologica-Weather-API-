window.document.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion =>{
            console.console.log(posicion);
        });
        
    }
});