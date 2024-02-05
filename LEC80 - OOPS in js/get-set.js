class User {
    constructor(name) {
        //invoke setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("name is too short");
            return;
        }
        this._name = value
    }
}

let n = new User("jonty") ////here set will run and it set name as value
console.log(n.name); //here bcz we are trying to get user name so get will run

n = new User("") //here set will run and it set name as value

//to check is object is made of given class -> (object) instanceof (class)
console.log(n instanceof User);