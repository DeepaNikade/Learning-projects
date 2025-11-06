const button = document.getElementById("clickMe");
function getrandomcolor() {
  const letters = "123456789ABCDEF";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += letters[Math.floor(Math.random() * 16)];
  }
  return hexColor;
}

function changeColor() {
  document.body.style.backgroundColor = getrandomcolor();
}
button.addEventListener("click", changeColor);

// setInterval(changeColor,1000);
