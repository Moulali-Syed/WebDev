//setTimeout() - is part of window

// setTimeout returns an id which we can store
// let timeoutId = setTimeout(myFunc, 5000);
// function myFunc() {
//   alert('please subscribe');
// }

// //we can use the timeoutId , to stop the timeout out function getting executed , with in the 5000 milliseconds
// //same as i have an alarm at 5 , but i got up by 4 then i will turn off alarm

// //we apply clearTimeout , to check some condition and remove the timeout
// //like some one is already subscribed then no need to show, then check the condition using some if and clear timeout
// clearTimeout(timeoutId);

// //setInterval will execute at every regular interval of time, like below code will execute every 2 seconds
// //setInterval returns an id when it get executed
// let t1 = setInterval(fun, 2000);
// function fun() {
//   console.log('please subscribe');
// }

// let btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//   clearInterval(t1);
// });

// console.log(location.href);
// console.log(location.pathname);
// console.log(location.protocol);
// /*
// http://127.0.0.1:5500/js-day6/index.html?
//  /js-day6/index.html
//  http:
// */

// //we can give a button in webpage  to refresh the page
// function fun() {
//   location.reload('https://www.google.com');
// }

// console.log(navigator.appName);
// console.log(navigator.appVersion);
// console.log(navigator.appCodeName);
// console.log(navigator.cookieEnabled); //returns true or false , and say enable for best experience
// console.log(navigator.userAgent);
// console.log(navigator.javaEnabled());

console.log(screen.height);
console.log(screen.width);
console.log(screen.colorDepth); //screen quality can be known
//we can Screen Orientation - which view is used portrait or landscape
