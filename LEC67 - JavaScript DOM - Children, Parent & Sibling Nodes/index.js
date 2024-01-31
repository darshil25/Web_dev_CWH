console.log("This is DOM BOM understanding yo!!");
console.log(document.body.childNodes); //--> in browser you will get text node which is basically space between body tag and div.container tag
console.log(document.body);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes);

//to get first element as a first child
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.children); //only gives child elements
console.log(document.body.firstElementChild.children[2].nextElementSibling); //gives next element sibling
console.log(document.body.firstElementChild.children[2].previousElementSibling); //gives previous element sibling
console.log(document.body.firstElementChild.children[2].nextSibling); //gices text as next sibling bcz text is not element but it is sibling
console.log(document.body.firstElementChild.children[2].parentElement); //gives parent element

console.log(document.body.children[1]);  //gives table
console.log(document.body.children[1].rows); //gives rows