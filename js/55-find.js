const myArr = ['helllo', 'cat', 'dog', 'lion'];

function isLength3(str) {
  return str.length === 3;
}

const ans = isLength3('dog');
console.log(ans);

const a = myArr.find(isLength3); //returns the first occurence whose length is 3
console.log(a);

const b = myArr.find((st) => st.length === 3);
console.log(b);

const users = [
  { userId: 1, userName: 'apple' },
  { userId: 2, userName: 'mango' },
  { userId: 3, userName: 'baana' },
  { userId: 4, userName: 'grapes' },
  { userId: 5, userName: 'jackfruit' },
];

const myUser = users.find((user) => user.userId === 3);
console.log(myUser);
