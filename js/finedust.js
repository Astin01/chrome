const API_KEYS =
  "OYirSKb5en2UtVzMoUenPVdX69LMoK8YbrzOiEo%2B0PxSnvDCCwIA2kpIzRq2%2BDLKuVvN14PsBerkKhaTx3kO5g%3D%3D";
const url = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=노원구&dataTerm=month&pageNo=1&numOfRows=100&returnType=json&dataTerm=DAILY&serviceKey=${API_KEYS}
`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const time = document.querySelector("#time");
    const pm10_val = document.querySelector("#pm10_val");
    const weather = data.response.body;
    console.log(data);
    time.innerText = weather.items[0].dataTime;
    pm10_val.innerText = weather.items[0].pm10Value;
  });
