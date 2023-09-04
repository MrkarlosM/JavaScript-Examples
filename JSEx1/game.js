/* 
Mooving Ball
Carlos Martínez

Instructions
Use Arrow Keys to move red ball
Use "R key" to reset position
*/
const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let positiony = 0;
let positionx = 0;

function handleKeyPress(e) {
  switch (e.code) {
    case "ArrowLeft":
      positionx = positionx - 10;
      break;
    case "ArrowRight":
      positionx = positionx + 10;
      break;
    case "ArrowUp":
      positiony = positiony - 10;
      break;
    case "ArrowDown":
      positiony = positiony + 10;
      break;
    case "KeyR":
      positionx = 0;
      positiony = 0;
  }
  if (positionx < 0) {
    positionx = 0;
  } else if (positiony < 0) {
    positiony = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = positionx + "px";
  ball.style.top = positiony + "px";
  console.log(`La posición es ${positionx},${positiony}`);
}
