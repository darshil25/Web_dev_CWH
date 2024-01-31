//my solution
// let n = Math.random();

// if(n < 0.2){
//     document.getElementById("b1").style.backgroundColor = "red";
// }
// else if(n >= 0.2 && n < 0.4){
//     document.getElementById("b2").style.backgroundColor = "green";
// }
// else if(n >= 0.4 && n < 0.6){
//     document.getElementById("b3").style.backgroundColor = "blue";
// }
// else if(n >= 0.6 && n < 0.8){
//     document.getElementById("b4").style.backgroundColor = "yellow";
// }
// else{
//     document.getElementById("b5").style.backgroundColor = "purple";
// }

// n = Math.random();
// if(n < 0.2){
//     document.getElementById("b1").style.color = "beige";
// }
// else if(n >= 0.2 && n < 0.4){
//     document.getElementById("b2").style.color = "pink";
// }
// else if(n >= 0.4 && n < 0.6){
//     document.getElementById("b3").style.color = "skyblue";
// }
// else if(n >= 0.6 && n < 0.8){
//     document.getElementById("b4").style.color = "orange";
// }
// else{
//     document.getElementById("b5").style.color = "white";
// }

//CWH Method
let boxes = document.querySelector(".container").children;

function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);

  return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
});
