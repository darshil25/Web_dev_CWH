console.log("JS is working");

let p = document.querySelector(".box");

console.log(p.tagName); //return the tag name of the element -> gives only like div, p, h1, h2 etc

console.log(p.nodeName); //return the Node type of the element -> gives tagname output and #text, #comment, #document etc

console.log(document.querySelector(".container").innerHTML); //give inner html code of the element

console.log(p.outerHTML); //give outer html code of the element

console.log(p.innerText); //give the text inside the element

console.log(p.hidden); //return true or false if the element is hidden or not
// p.hidden = true; //hide the element

p.innerHTML = "<h2>Badal Barsa bijuli</h2>" //change the inner html of the element

console.log(p.hasAttribute("class")); //return true or false if the element has the attribute or not

console.log(p.getAttribute("class")); //return the value of the attribute

console.log(p.setAttribute("class", "box box2")); //set the value of the attribute

//document.designmode = "on"; //make the whole page editable

//inserting element in HTML by dynamically - element inserting only
let div = document.createElement("div"); //create a div element
div.innerHTML = "You are looking at <b>Me!!!</b>" //set the inner html of the div
div.setAttribute("class", "new"); //set the class attribute of the div
document.querySelector(".container").append(div) //append the div to the container - with append it show at the end of the container

//inserting HTML Code itself
let con = document.querySelector(".container")
con.insertAdjacentHTML("beforebegin", "<h1>He bhagwan nokri lagai do</h1>")

// document.querySelector(".container").remove() //remove element of container

document.querySelector(".container").classList.add("bharatiya") //add bharatiya class with container

document.querySelector(".container").classList.toggle("pink") //add pink if it is not in class name and remove if it alredy in class name