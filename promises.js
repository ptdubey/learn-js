const promiseOne = new Promise(function (resolve, reject) {
  //do an async
  // data base , cryptography ,network
  setTimeout(function () {
    //  console.log(`async is complted `);
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  //console.log("promise consumed");
});
//new method
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  // console.log("async 2 resolved");
});

//third method

const promiseThee = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Pt-Aditya", email: "aditya@gmail.com" });
  }, 1000);
}).then(function (user) {
  user.username = "most-wanted-aditya";
  user.email = "dubey@email.com";
  // console.log(user);
});

// method four

new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Aditya", email: "aditya@gmail.com" });
    } else {
      reject("ERROR; something went wrong");
    }
  }, 1000);
})
  .then((user) => {
    //console.log(user);
    return user.username;
  })

  .then((username) => {
    //  console.log(username);
  })

  .catch(function (error) {
    // console.log(error);
  })
  .finally(() => console.log("the promise is either resolve or rejected"));

//method five

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123234321" });
    } else {
      reject("ERROR: js went wrong");
    }
  }, 1000);
});

//asyncfunction

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    // console.log(response);
  } catch (error) {
    // console.log(error);
  }
}

consumePromiseFive();

//getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
