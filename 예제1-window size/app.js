// const windowScreen = document.querySelector(".windowScreen");
// let windowOuter = document.querySelector(".windowOuter");
// let windowInner = document.querySelector(".windowInner");
// let documentElement = document.querySelector(".documentElement");

// windowOuter.innerHTML = `window.outer = ${window.outerWidth}, ${window.outerHeight}`;
// windowScreen.innerHTML = `window.screen = ${window.screen.availWidth}, ${window.screen.availHeight}`;
// windowInner.innerHTML = `window.inner = ${window.innerWidth}, ${window.innerHeight}`;
// documentElement.innerHTML = `documentElement.clientWidth = ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;

function variation() {
  const container = document.querySelector(".container");
  container.innerHTML = `
  window.outer = ${window.outerWidth}, ${window.outerHeight} </br>
  window.screen = ${window.screen.availWidth}, ${window.screen.availHeight} </br>
  window.inner = ${window.innerWidth}, ${window.innerHeight} </br>
  documentElement.clientWidth = ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight} </br>
  `;
}
//resize가 일어나기 전에도 화면에 떠있게 하기 위해서
variation();

window.addEventListener("resize", variation);
