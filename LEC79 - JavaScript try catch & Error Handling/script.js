console.log('Running script.js...')


let a = prompt('Enter a number 1: ');
let b = prompt('Enter a number 2: '); //by default prompt returns a string so we have to convert numbers in integer

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Please enter valid number!!!")
}

let sum = parseInt(a) + parseInt(b);

//handling error
function main(){
    try {
    console.log(`The sum is ${sum}*${x}`); //throws error bcz x is not defined
    return true;
    } catch (error) {
        console.log('wtf bro! error aa gya!');
        return false;
    }
    finally{ //finally block will always run and it will be useful in functions
        console.log('Signing off...');
    }
}

main()
//if we do not use finaly then it will not print the last line of code, that's it is useful when function returns something