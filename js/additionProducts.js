let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  let counter = 0;
  button.addEventListener("click", function () {
    let span = document.getElementById("counterSpan");

    if (counter > 9) {
      alert("You have 10 products in your shopping cart");
    } else {
      counter++;
      span.innerHTML = counter;
      console.log(counter);
    }
  });
});
