// alert('hello world');

/*
let age = prompt('Enter your age');

if (age != null && age != '') {
  document.write(`your age is ${age}`);
} else {
  document.write('age field is blank');
}

//if we want some default input to be shown in the input field
let age1 = prompt('Enter your age', 20);

if (age1 != null) {
  document.write(`your age is ${age1}`);
} else {
  document.write('age1 field is blank');
}
*/

let response = confirm('Are you sure you want to delete?');

if (response) {
  document.write('deleted');
} else {
  document.write('Not deleted');
}
