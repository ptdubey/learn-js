// normal function
function functionName(num1) {
  return num1;
}

console.log(functionName(200));

//the output of this function is --> 200

//...................................................//

//Rest operator -> it warp all the data in single array . it looks like a spread operator

function functionName1(...num2) {
  // here we use rest operator

  return num2;
}

console.log(functionName1(200, 100, 300, 7000, 789));
// output->[200, 100, 300, 7000, 789  ]

//..............................................................//
// Another mehod to use rest operator

function functionName2(val1, val2, ...num3) {
  // here we use rest operator

  return num3;
}

console.log(functionName2(200, 100, 300, 7000, 789));
// output ->[ 300, 7000, 789 ]
//val1 - cover -> 200
//val2 - cover -> 300

//pass object- in function

const details = {
  product: "Redmi-Note-12",
  price: 12999,
};

function handleObject(objectParameter) {
  console.log(
    `product Name ${objectParameter.product} and the price is ${objectParameter.price}`
  );
}
handleObject(details);

//passing array in  function

const myArray = [10, 20, 30, 40, 50];

function handleArray(arrayArgument) {
  return arrayArgument[1];
}
console.log(handleArray(myArray));
