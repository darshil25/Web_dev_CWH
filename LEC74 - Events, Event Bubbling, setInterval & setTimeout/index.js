console.log("Script is running...");
// list of all mouse events -> https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
let butt = document.getElementById("btn");

butt.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b>Yayyy clicked again</b>";
});

document.addEventListener("contextmenu", () => {
    alert("Do not try to be smart");
});

document.addEventListener("keydown", (e) => {
    console.log(e.key);
});