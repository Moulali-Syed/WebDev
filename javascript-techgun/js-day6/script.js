// let link = document.getElementById('anchor');
// link.addEventListener('click', function (e) {
//   console.log('link clicked...');
//   e.preventDefault();
// });

// // this changes default behaviour of link , instead of going to google.com , it just shows a console output

// //whenever we want to change the default behaviour we can use preventDefault()
// let form = document.getElementById('myForm');
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
// });

// var x = 'hello';
// console.log(window.x);

// //variables declared with var will only become properties of window , but not those with let , const

// function xyz() {
//   console.log('hi');
// }

// window.xyz();

// //window is defalut object of browser so we can write below way
// xyz();

// //alert , confirm , prompt are methods of window object
// //we can call with window
// window.alert();
// window.prompt();
// window.confirm();

// //we can call them directly as well

// alert();
// prompt();
// confirm();

// //whenever we open a website , browser will create a window object for us

//to know the height and width of the content window
console.log(window.innerHeight);
console.log(window.innerWidth);

//to know the height and width of the complete browser tab
console.log(window.outerHeight);
console.log(window.outerWidth);

//open a new window - some websites show popup windows  , lets create it
let btn = document.getElementById('btn1');
let url = 'https://www.google.com';
let features = 'height=500,width=500';
let win;
btn.addEventListener('click', function () {
  //   window.open(url,Name,features);
  win = window.open(url, 'google', features); // this returns a id of pop up window, which helps in closing using its id
});

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function () {
  window.open('https://yahoo.com', 'google', features);
});
//check in google for remaining fetures of window.open
//name parameter is very useful , because in above we are using same name as google
//this will ensure the links open in same pop up window
//that is when i click btn1 - a window with google.com is opened
//now when i click on btn2 - the url of the window which is already opened gets changed

//we can close the pop up window , by using id of the popup window , as stored win above
let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function () {
  win.close();
});
