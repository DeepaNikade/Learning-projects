let numbInput = document.getElementById("numbInput");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

let randomNumber = Math.floor(Math.random() * 100) + 1;

// console.log(randomNumber);

btn.addEventListener("click", () => {
  let val = parseInt(numbInput.value);
  console.log(val);

  if (isNaN(val) || val < 1 || val > 100) {
    output.textContent = "please enter a valid number";
  } else if (val === randomNumber) {
    output.textContent = "Your Guess is Correct";
  } else if (val < randomNumber) {
    output.textContent = "value is low";
  } else {
    output.textContent = "value is high";
  }
});
