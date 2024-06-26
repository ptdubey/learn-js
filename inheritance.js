class user {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USER is ${this.username}`);
  }
}
class teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourses() {
    console.log(`the course is created by ${this.username} `);
  }
}

const chai = new teacher("chai", "chai@gmail.com", "12345");
chai.logMe();
const masalaChai = new user("mashalachai");

masalaChai.logMe();
console.log(chai instanceof user);
//inheratance in javascript
//inheritance is a mechanism in which one object can inherit the properties and behavior of another object.
//give some example
//1. a car is a vehicle
//2. a dog is an animal
//3. a teacher is a user
//4. a square is a rectangle
