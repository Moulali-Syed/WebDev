//lexical scope

const myVar = 'value1';
function myApp() {
  function myFunc() {
    const myVar = 'value59';
    console.log('inside myFunc ', myVar); //inside myFunc  value59
  }

  const myFunc2 = () => {};

  const myFunc3 = function () {};

  console.log(myVar);
  myFunc();
}

myApp();

//myVar will be checked inside myFunc , then inisde myApp , then in the file

const func1 = () => {
  const func2 = () => {
    const func3 = () => {
      console.log(myVar);
    };
    func3();
  };

  console.log(myVar);
  func2();
};
func1();
