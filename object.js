// silgeltain
// object.create ->> constractor method

// literal method

const mysam = Symbol("key1"); //used as symbol

const myjs = {
  name: "aditya",
  class: "bca",
  emailId: "Aditya0786ad@gmail.com",
  "friend name": "sachidanand yadav",

  [mysam]: "59431sjjdg", //syntax to use as a symbol
};
console.log(myjs.name);
console.log(myjs["emailId"]);
console.log(myjs["friend name"]);
console.log(myjs[mysam]);

myjs.emailId = "aditya@microsoft.com";
// Object.freeze(myjs);
myjs.emailId = "mritunjay@google.com";

myjs.greeting = function () {
  console.log(`hello  js usear `);
};
console.log(myjs);
console.log(myjs.greeting());

myjs.greeting2 = function () {
  console.log(`hello js usear ${this.name}`);
};
console.log(myjs);
console.log(myjs.greeting2());
