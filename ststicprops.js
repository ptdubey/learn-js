class user {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME: ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

const aditya = new user("Aditya");
//console.log(aditya.createId);
class Teacher extends user {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());
