// silgention object
const tinder = {};
(tinder.id = "123abc"), (tinder.name = "aditya dubey");
tinder.branch = "BCA";
// console.log(tinder);

const uearFunction = {
  email: "adtya@cloud.com",
  fullName: {
    usearFullName: {
      firstName: "Aditya",
      lastName: "Dubey",
    },
  },
};
console.log(uearFunction.fullName.usearFullName.firstName);

const usear1 = { pass: "123!@#", key: "aryan" };
const usear2 = { id: "456!@#", name: "adarsh" };

// const obj3 = Object.assign(usear1, usear2);

const obj3 = { ...usear1, ...usear2 };
console.log(obj3);
