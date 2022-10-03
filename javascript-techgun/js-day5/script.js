/*
let element = document.getElementById('first');
console.log(element); //   <li id="first">list2</li>

console.log(element.innerHTML); //list2

element.innerHTML = '<p> helloworld </p>'; // this will chnage the content visible on the browser

let element1 = document.getElementById('first-1');
console.log(element1); //null

console.log(element1.innerHTML); //Uncaught TypeError: Cannot read properties of null (reading 'innerHTML')
*/

/*
let element = document.getElementsByClassName('cl');
console.log(element); //HTMLCollection(2) [li.cl, li.cl]
console.log(element.length); //2

for (let i = 0; i < element.length; i++) {
  element[i].innerHTML = '<p> Hello There !</p>';
}

*/

/*
let div1 = document.getElementById('div1');
let elem = div1.getElementsByTagName('h2');
for (let i = 0; i < elem.length; i++) {
  elem[i].innerHTML = ' hey there';
}
*/

/*
//querySelector - selects the first matching element
let elem = document.querySelector('p.intro');
console.log(elem);
for (let i = 0; i < elem.length; i++) {
  elem[i].innerHTML = 'hello ';
}
*/

// let elem = document.getElementById('intro');
// let prtElem = elem.parentElement;
// console.log(elem); // <li id="intro">list1</li>
// console.log(prtElem);
// /*
// <ul>
//       <li id="intro">list1</li>
//       <li>list2</li>
//       <li>list3</li>
//       <li>list4</li>
//     </ul>
// */
// prtElem.innerHTML = 'hello';

let ele = document.getElementById('intro');
let node = ele.firstElementChild;
let node1 = ele.lastElementChild;
console.log(node); //  <li>list1</li>
console.log(node1); // <li>list4</li>;
let nodes = ele.children;

let el = document.getElementById('liEle');
let prevEle = el.previousElementSibling;
let nextEle = el.nextElementSibling;
console.log(prevEle);
console.log(nextEle);
