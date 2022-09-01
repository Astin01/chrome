const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
// js에서 생성한 변수는 js 내에서 해결

// 이미지 변수, 랜덤함수 이용해서 이미지 선택
