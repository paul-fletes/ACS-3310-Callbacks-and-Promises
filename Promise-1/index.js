// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("--- Oops ---");
    resolve('>>> Success! <<<');
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(">>> Success! <<<");
    reject("--- Oops ---");
  }, 2000);
});

p2.then((message) => {
  console.log("Promise 2 resolved 😄");
  console.log(message)
}).catch((err) => {
  console.log("Promise 2 rejected 😔");
  console.log(err)
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(">>> First Success! <<<");
    resolve(">>> Second Success! <<<");
    reject("--- Oops (post-resolve) ---");
  }, 2000);
});

p3.then((message) => {
  console.log("Promise 3 resolved 😄");
  console.log(message)
}).catch((err) => {
  console.log("Promise 3 rejected 😔");
  console.log(err)
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// Rejected promises will execute the code within the .catch() block.

// **2)** What happens when you call both `resolve` and `reject`? Test this.
// Depending on the order called, the first method called is executed while the second gets ignored.

// **3)** Does the order matter you call resolve and reject matter? Test this.
// Yes, the order in which we call resolve/reject matters. This is due to the Promise's
// state, and the inability to change states once it's been altered.

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// As mentioned above, once a promise's state has been changed from 'pending', it cannot change.
// Therefore, any subsequent calls to resolve/reject will have no effect.
