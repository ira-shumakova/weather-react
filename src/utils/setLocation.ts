const setLocationToLocalStorage = (): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        const latitude: number = position.coords.latitude;
        const longitude: number = position.coords.longitude;
        localStorage.setItem('lat', String(latitude));
        localStorage.setItem('lon', String(longitude));
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
  export default setLocationToLocalStorage;