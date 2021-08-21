const cursorVT = document.querySelector(".vt");
const cursorHL = document.querySelector(".hl");
const target = document.querySelector("#target");
const coordinates = document.querySelector(".coordinates");

//함수를 따로 지정하지 않았기 때문에 변수를 밖에 설정해도 됨
document.addEventListener("mousemove", (event) => {
  console.log(`${event.clientX}, ${event.clientY}`);
  // const x = event.clientX;
  // const y = event.clientY;
  // console.log(x);
  // console.log(y);

  // cursorVT.style.transform = `translateX(${x}px)`;
  // cursorHL.style.transform = `translateY(${y}px)`;
  // target.style.transform = `translateX(${x}px)`;
  // target.style.transform = `translateY(${y}px)`;
  // coordinates.innerHTML = `${x}px ${y}px`;
  // coordinates.style.transform = `translateX(${x}px)`;
  // coordinates.style.transform = `translateY(${y}px)`;
});
