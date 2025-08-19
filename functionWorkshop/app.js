console.log("Welcome to Functionworkshop");

function sayHello()
{
    console.log("Hello World");

}
//Calling Function
sayHello();

function argumentFunction(argument1, argument2)
{
    console.log(argument1,argument2);
}

argumentFunction("Good", "Morning")

function sayHelloTo(username)
{
    console.log("Hello " + username + "!");

}

sayHelloTo("Bob");
sayHelloTo("Jimmy");
sayHelloTo("Alice");

function greet(greeting, userName)
{
    console.log(greeting + " " + userName + "!");
}
greet("Good Morning", "Bob");
greet("Buenos dias", "Alice");
greet("Bonjour", "Charlie");

function add(a,b)
{
    return a + b;
}

function subtract(a,b)
{
    return a - b;
}

function multiply(a,b)
{
    return a * b;
}

function divide(a,b)
{
    return a / b;
}

const result = add(1, 5);
console.log("The result is", result);

const anotherResult = add(10,5);
console.log("Another result is", anotherResult);

function calculate(a, b, operator)
{
      if(operator === "+")
      {
        return add(a,b);
      } else if(operator === "-")
      {
        return subtract(a,b);
      }else if (operator === "*")
      {
        return multiply(a,b);
      }else if( operator === "/")
      {
        return divide(a,b);

      }
}

const result1 = calculate(4,5, "+");
console.log("The result is", result1);

const anotherResult1 = calculate(5,9, "*");
console.log("Another result is", anotherResult1);
