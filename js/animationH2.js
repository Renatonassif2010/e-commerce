const h2 = document.getElementById("h2");
function animationH2() {
  let time;
  let arrayWords = [
    "Low price! Buy ours products!",
    "Oportunity to buy!",
    "Quality in products!",
    "Good Service!",
    "The best company in the technology!",
    "Welcome to Nassif's E-commerce",
  ];
  time = setInterval(function () {
    let number = Math.floor(Math.random() * arrayWords.length);
    h2.style.opacity = 0;
    setTimeout(function () {
      h2.innerHTML = arrayWords[number];
      h2.style.opacity = 1;
    }, 1000);
  }, 5000);
}
