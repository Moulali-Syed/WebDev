let foo = 'foo'; //1
console.log(foo); //2
function getFullName(fName, lName) {
  //3
  console.log(arguments);
  let myVar = 'var inside func';
  console.log(myVar);
  const fullName = fName + ' ' + lName;
  return fullName;
}

const personName = getFullName('apple', 'shimla'); //4
console.log(personName); //5

/*

memory creation phase
window:{}
this:window
let foo:unitialized
getFullName: f [because func declaration]
const personName: unitialized

code execution phase:
1- foo=foo
2.foo printed
3.creates  a new function execution context
   local memory creation
        array like object - we can use index , it has length
        arguments:[ variables passed to function ]
        fName:'apple'
        lName:'Shimla'
        myVar:unitialized
        fullName:uninitialized
   code execution
        arguments printed
        myvar initialized
        prints myVar value
        fullName will be set to the value
        returns fullName to personName variable



*/
