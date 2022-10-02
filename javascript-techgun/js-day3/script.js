outer: for (let num = 1; num < 3; num++) {
  console.log(num);
  for (let num2 = 1; num2 <= 2; num2++) {
    if (num == 2) {
      break outer;
    }
    console.log(num2);
  }
}
/*
for (let counter = 1; counter <= 10; counter++) {
  if (counter == 5) {
    break;
  }

  console.log('Hello');
}

for (let counter = 1; counter <= 10; counter++) {
  if (counter == 5) {
    continue;
  }

  console.log(`Hello ${counter}`);
}

//nested loop
for (let counter = 1; counter <= 10; counter++) {
  console.log(`Hello ${counter}`);
  for (let counter2 = 1; counter2 < 3; counter2++) {
    console.log(counter2);
  }
}
*/
