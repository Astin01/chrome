const API_KEYS =
  "OYirSKb5en2UtVzMoUenPVdX69LMoK8YbrzOiEo%2B0PxSnvDCCwIA2kpIzRq2%2BDLKuVvN14PsBerkKhaTx3kO5g%3D%3D";
const url = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=노원구&dataTerm=month&ver=1.0&pageNo=1&numOfRows=100&returnType=json&dataTerm=DAILY&serviceKey=${API_KEYS}
`;
const pm10_status = document.querySelector("#pm10_status");
const pm25_status = document.querySelector("#pm25_status");
function pm10_fun(value) {
  if (value <= 30) {
    pm10_status.innerText = "좋음";
  } else if (30 < value <= 80) {
    pm10_status.innerText = "보통";
  } else if (80 < value < 150) {
    pm10_status.innerText = "나쁨";
  } else {
    pm10_status.innerText = "매우나쁨";
  }
}
function pm25_fun(value) {
  if (value <= 15) {
    pm25_status.innerText = "좋음";
  } else if (15 < value <= 35) {
    pm25_status.innerText = "보통";
  } else if (35 < value < 75) {
    pm25_status.innerText = "나쁨";
  } else {
    pm25_status.innerText = "매우나쁨";
  }
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const time = document.querySelector("#time");
    const pm10_val = document.querySelector("#pm10_val");
    const pm25_val = document.querySelector("#pm25_val");
    const weather = data.response.body;
    const pm10 = data.response.body.items[0].pm10Value;
    const pm25 = data.response.body.items[0].pm25Value;
    console.log(data);
    time.innerText = weather.items[0].dataTime;
    pm10_val.innerText = pm10;
    pm10_fun(pm10);
    pm25_val.innerText = pm25;
    pm25_fun(pm25);
  });
