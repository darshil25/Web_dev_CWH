console.log("thoda aur DOM");

//getElementsByClassName()
// let padpad = document.getElementsByClassName("box"); //it gives all elements of class box
// console.log(padpad);
// padpad[2].style.backgroundColor = "yellow"; //from class we can perform action on its children

//getElementById()
// let pap = document.getElementById("kol");
// pap.style.backgroundColor = "pink";

//.querySelector()
// document.querySelector(".box").style.backgroundColor = "red"; //targets only first element whose classname is box
// document.querySelectorAll(".box").style.backgroundColor = "red"; //this won't work because it targets childNode array amd array does not have style
//so to apply in every element through querySelector below method used
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})