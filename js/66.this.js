console.log(this); //returns window object

console.log(this === window); //true

function myFunc() {
  //if using strict mode , then returns undefined , if not used returns window object
  console.log(this);
}
myFunc();
