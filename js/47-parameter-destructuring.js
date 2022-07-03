const person = {
  firstName: 'apple',
  city: 'Shimla',
};

function printDetails(obj) {
  console.log(obj.firstName);
  console.log(obj.city);
}

printDetails(person);

function printDet({ firstName, city, lastName }) {
  console.log(firstName);
  console.log(city);
  console.log(lastName); //if not present it will display undefined
}
printDet(person);
