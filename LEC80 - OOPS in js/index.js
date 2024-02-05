// let obj = {
//     a:1,
//     b:2
// }

// let animal = {
//     walk: true
// }
// let rabbit = {
//     jump: true
// }
// inheritance
// rabbit.__proto__ = animal; this will set rabbit[[prototype]] = animal

class Animal{
    constructor(name){ //we can set proprty which will be automatically applies to new object that we creates
        this.name = name
        console.log("Created Animal object...."); //it will run automatically
    }
    run(){
        console.log('Bhag raha hu...');
    }
    eat(){
        console.log('kha raha hu...');
    }
}

class Mammals extends Animal{
    constructor(type){
        super(type)  //calling parent class constructor
        console.log('This is Mammals...');
    }
    veg(){
        super.eat() //run parent class method
        console.log('are vegeterian');
    }
    eat(){ //method overriding
        
        console.log('kha raha hu ghaas....');
    }
}
let a = new Animal('saslu') //created object a
console.log(a);

let cow = new Mammals('pet')
console.log(cow);