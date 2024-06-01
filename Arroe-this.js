const usear = {
  usearName: "Aditya",
  PAssword: 124243,

  welcome: function () {
    console.log(`${this.usearName} , Welcome to My website`);
    console.log(this);
  },
};

usear.welcome();
// this represent corrent contest
usear.usearName = "Mritunjay Dubey";
usear.welcome();
// console.log(this);-->// this return empty object because there is no any global contest

// 1 st method to use arrow function
const usear2 = (a, b) => {
  console.log(`the value of a = ${a} and b ${b} `);
};
usear2(2, 3);
//2nd method to use arrow function

const usear3 = (b, c) => console.log(`the valus of b= ${b}  and c =${c} `);
usear3(4, 6);
