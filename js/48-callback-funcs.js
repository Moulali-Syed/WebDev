//call back functions
function myFunc(callback) {
  //fetch data from database
  console.log('Hello there');
  callback();
}

function myFunc2() {
  console.log('inside func 2');
}

myFunc(myFunc2);
