
console.log("hello functions")

//todo: I want to say hi to joe
//structure----
// function functionNameTask(optionalParameters)
// {
//     //action(task)
// }

function sayHi()
{
    console.log("hello joe");
}

//we need to call/invoke our function to be executed

//sayHi();


function sayHi(username)
{
    console.log(`Hi ${username}`);
}

sayHi("Joey");
sayHi("Jaey");

function greetUser(username, greeting){
    console.log(`Hi{greeting}, ${username}`);
}

greetUser("joey", "goodmorning");
greetUser("jaey", "hello");

//Our functions have a specific scope --> block scope/function scope

function add(){
let a= 4;
let b=2;
console.log(a);
}

function addNo(a,b){
return a + b;

}

console.log(addNo(6,5));

let a =9;
let b=4;

function Subtract()
{
    
}