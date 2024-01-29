console.log("This is tutorial on JS Strings");

let na = " darshildar"
console.log(na[3]); // print character of string
console.log(na.length)

let sur = "Thum"
console.log("his first name is "+na+" and last name is "+sur);

//template literals is used for string concatination
console.log(`his first name is ${na} and last name is ${sur}`);

console.log(na.toUpperCase());
console.log(na.toLowerCase());
console.log(na.slice(2, 6)); //slice string from index 2 to 5(6-1)

console.log(na.replace("da", "pt")); //replace da with pt - but only first occurence
console.log(na.concat(sur, "boss")); // concatinate string
console.log(na.trim()); // remove extra space from string