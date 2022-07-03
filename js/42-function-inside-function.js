const app = () => {
  const myFunc = () => {
    console.log('hello from myFunc');
  };

  const addTwoNum = (num1, num2) => {
    return num1 + num2;
  };

  function mul(num3, num4) {
    return num3 * num4;
  }
  console.log('inside app');
  myFunc();
  const sum = addTwoNum(2, 3);
  console.log(sum);
  const multiply = mul(4, 7);
  console.log(multiply);
};

app();
