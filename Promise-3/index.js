function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof name === 'string') {
        resolve('hello ' + name);
      } else {
        reject('Greet expects a string!');
      }
    }, 1000);
  });
}

function uppercaser(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof str === 'string') {
        resolve(str.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 1000);
  });
}


// Above we have two functions that return promises. 
// These are greet and uppercaser. 
// Notice below how we chain these promises together. The 
// Result of one is then passed to the next. 
// When chained all of the promises have to resolve for success. 
// If any of the promises reject then you end in the catch block. 

greet('Your name') // Returns a Promise
  .then(str => uppercaser(str))  // Upper case the results from greet() Returns a Promise
  .then(str => console.log(str)) // Log the results of uppercaser()
  .catch(err => console.log(err)) // Catches an error

// Challenges: get greet() to fail by passing a non string value
// What happens? 
greet(123)
  .then(str => uppercaser(str))
  .then(str => console.log(str))
  .catch(err => console.log(err))

// Greet() checks that the argument passed to it is a string. Since the argument passed was a
// number, then the promise is rejected. We then see the error message caught from the .catch()
// at the end.

// Challenge: get uppercaser() to fail by passing a non string value
// What happens?
uppercaser(42)
  .then(str => console.log(str))
  .catch(err => console.log(err));

// Uppercaser() checks that the argument passed to it is a string. Since we pass a number, it
// rejects the promise. We then see the error message from the reject branch printed into the
// console.

// Challenge: Notice there is only a single .catch() at the end.
// Explain the behavior?
// Promises offer cleaner, more maintainable code through the use of single .catch()
// methods to handle promises rejections. They allow for any rejection in a promise chain
// to be passed to the .catch() method. This allows for centralized error handling, as
// opposed to multiple error handlers as is the case with nested callbacks.

