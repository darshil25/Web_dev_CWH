console.log("This is Excercise 10");

/*Question ->
Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
 */

//Solution
let ran = Math.random()
let first, second, third;

//first
if(ran < 0.33){
    first = "Crazy"
}
else if(ran >= 0.33 && ran < 0.66){
    first = "Amazing"
}
else{
    first = "Fire"
}

ran = Math.random()
if(ran < 0.33){
    second = "Engine"
}
else if(ran >= 0.33 && ran < 0.66){
    second = "Foods"
}
else{
    second = "Garments"
}

ran = Math.random()
if(ran<0.33){
    third = "Bros"
}
else if(ran >=0.33 && ran < 0.66){
    third = "Limited"
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`);
