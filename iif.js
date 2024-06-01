// method to immediately invocked function(iif)

(function mongo() {
  console.log(`DB connected`);
})();

//by arrow function immediately invocked function

((name) => {
  console.log(`Hello ${name}`);
})(`Aditya`);

(function (name) {
  console.log(`Hello dear ${name}`);
})(`Nupur`);

((name) => {
  console.log(`i love you ${name}`);
})(`NuPuR`);
