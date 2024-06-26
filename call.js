function setUserName(userName) {
  this.userName = userName;
  console.log("called");
}

function createUser(userName, email, password) {
  setUserName.call(this, userName); //.call function is used to pass the reference

  this.password = password; //In the context of an object method in JavaScript, the `this` keyword refers to the object itself, allowing access to its properties and methods within the method's scope. It facilitates interaction with the object's data and behavior, providing a way to access and manipulate its state.
  this.email = email;
}
const final = new createUser("Adita-Dubey", "Aditya@123", "Adityafb@gmail.com");
console.log(final);
