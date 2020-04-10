function xyz() {
  const myImg = document.createElement("img");

  myImg.src = "https://source.unsplash.com/random";

  myImg.style.width = "400px";

  document.body.append(myImg);
  myImg.style.transition = "all 2s";

  setInterval(() => {
    const width = Math.floor(document.body.clientWidth * Math.random());
    const height = Math.floor(document.body.clientHeight * Math.random());
    myImg.style.transform = `translate(${width}px,${height}px)`;
  }, 2000);
}



const btn = document.querySelector('.btn');

btn.addEventListener('click', xyz);
