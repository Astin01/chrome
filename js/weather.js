function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEYS = "4f74153448f53da9d65fd95c4eb13f28";
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`;
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data)=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText =`${data.weather[0].main} / ${data.main.temp}`;
    });
}
// response 객체는 fetch를 통해서 요청했을 때 웹서버가 응답한 결과를 담고있는 객체데이터

function onGeoError(){
    alert("Can't find you.")
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError); 