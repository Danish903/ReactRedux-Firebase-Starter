const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: "buster",
    //   age: 13
    // });
    reject("Something went wrong");
  }, 3000);
});

console.log("before");
promise.then(data => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

console.log("after");
