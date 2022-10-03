// window.addEventListener('keydown', checkKey);

// function checkKey(event) {
//   console.log(event.key);
// }

// window.addEventListener('keyup', checkKey1);
// function checkKey1(event) {
//   console.log(event.key);
// }

//in some websites we see popup when we scroll the webpage , downwards
// window.addEventListener('scroll', function () {
//   if (window.pageYOffset > 150) {
//     document.body.style.background = 'red';
//   } else {
//     document.body.style.background = 'white';
//   }
// });

let x = document.getElementById('myInput');
x.addEventListener('focus', myFocusFunction);
x.addEventListener('blur', myBlurFunction);
x.addEventListener('change', function () {
  console.log(this.value);
});
function myFocusFunction() {
  x.style.background = 'yellow';
}

function myBlurFunction() {
  x.style.background = 'white';
}

x.addEventListener('input', function () {
  console.log(this.value);
});
