// console.log("Callback function workshop");


// // logs a string to the console to tell the user the function was called
// function notifyUser() {
//   console.log("notifyUser function was called!");
// }

// // accepts a function as an argument to run when it has done it's work
// function myAwesomeFunction(notifyUserCallback) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete. I will notify the user");
//   notifyUserCallback();
// }


// // run the awesome function, and pass the notifyUser function to it
// myAwesomeFunction(notifyUser);

// //Anonymous function
// console.log("***************Anonymous Function************************************")
// function myAwesomeFunction(onCompleteCallback) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete. I will notify the user");
//   onCompleteCallback();
// }

// myAwesomeFunction(function () {
//   console.log("notifyUser function was called!");
// });

// //This can also be defined as an arrow function, which in this case is just a short hand way of writing the same anonymous function, without the need for the function keyword

// myAwesomeFunction(() => {
//   console.log("notifyUser function was called!");
// });

// function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete. I will notify the user");

//   // randomly choose if success is true or false
//   const success = Math.random() > 0.5;
//   if (success) {
//     onSuccessCallback({
//       message: "This is the message of success",
//     });
//   } else {
//     onFailureCallback();
//   }
// }

// function onAwesomeSuccess(data) {
//   console.log("It was successful: ", data.message);
// }

//  function onAwesomeFailure() {
//  console.log("It failed :(");
//  }


// myAwesomeFunction(onAwesomeSuccess, onAwesomeFailure);

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

const result = myCalculatorFunction(5, 2, add);
console.log(result); // Output: 3

const result2 = myCalculatorFunction(2, 5, multiply);
console.log(result2); // Output: 6

const result3 = myCalculatorFunction(9, 2, subtract);
console.log(result3); // Output: 7

const result4 = myCalculatorFunction(16, 4, divide);
console.log(result4); // Output: 4


// add the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); 