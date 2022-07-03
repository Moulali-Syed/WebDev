const users = [
  { userId: 1, firstName: 'apple', city: 'Shimla' },
  { userId: 2, firstName: 'banana', city: 'Goa' },
  { userId: 3, firstName: 'mango', city: 'hyderabad' },
];

const [user1, user2, user3] = users;
console.log(user1);

const [{ firstName }, , { city }] = users;
console.log(firstName, city);

const [{ firstName: user1firstName }, , { city: place }] = users;
console.log(user1firstName);
console.log(place);
