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

// let ele = document.getElementById('intro');
// let node = ele.firstElementChild;
// let node1 = ele.lastElementChild;
// console.log(node); //  <li>list1</li>
// console.log(node1); // <li>list4</li>;
// let nodes = ele.children;

// let el = document.getElementById('liEle');
// let prevEle = el.previousElementSibling;
// let nextEle = el.nextElementSibling;
// console.log(prevEle);
// console.log(nextEle);

// let ele = document.getElementById('intro');
// let content = ele.innerHTML;
// console.log(content);
// ele.innerHTML = '<h1>This is a heading </h1>';

// let ele = document.getElementById('intro');
// //create a tag
// let h1 = document.createElement('h1');
// let text = document.createTextNode('This is h1 tag');
// h1.appendChild(text);
// //append
// ele.appendChild(h1);

// //add a className
// h1.className = 'cl1 cl2';
// //add id
// h1.id = 'intro1';

// document.body.appendChild(h1);

// //add text using a property
// h1.textContent = 'Content added';

// let para = document.getElementById('p1');
// console.log(para.textContent);

// let list1 = document.getElementById('list');
// let item = document.createElement('li');
// item.textContent = 'New List 5';
// list1.appendChild(item);

//till now using append we are adding at the last, to add at a particular position we can use
//insert before
// let list1 = document.getElementById('list'); //parent
// let item = document.createElement('li');
// item.textContent = 'new list 5';
// let pos = list1.firstElementChild.nextElementSibling;
// list1.insertBefore(item, pos); //item - is what to be added , pos - is the position

// let parent = document.body;
// let elm = document.createElement('h2');
// elm.textContent = 'this is new element';
// let list = document.getElementById('list');
// parent.insertBefore(elm, list);

// let parent = document.getElementById('menu');
// let elm = parent.firstElementChild.nextElementSibling;
// console.log(elm);
// parent.removeChild(elm);

// document.body.removeChild(parent);

// let menu = document.getElementById('menu');
// let cloneEle = menu.cloneNode(true); //if we pass true then it will create clone along with child
// //if not passed true then child elements will not cloned
// console.log(cloneEle);
// cloneEle.id = 'mobile menu';
// document.body.appendChild(cloneEle);

// let parent = document.getElementById('menu');
// let item = document.createElement('li');
// item.textContent = 'Services';
// let replace = parent.firstElementChild.nextElementSibling;
// parent.replaceChild(item, replace);

// let elm = document.getElementById('intro');
// let html = '<h1>New h1</h1>';
// elm.insertAdjacentHTML('beforebegin', html);
// elm.insertAdjacentHTML('afterbegin', html);
// elm.insertAdjacentHTML('beforeend', html);
// elm.insertAdjacentHTML('afterend', html);

// let btn = document.getElementById('btn');
// btn.setAttribute('name', 'form1');
// btn.setAttribute('class', 'btnClass');

// //to know value of attribute
// let val = btn.getAttribute('name');
// console.log(val);

// //remove attribute
// btn.removeAttribute('name');

// //check attribute is present
// console.log(btn.hasAttribute('name')); //return true or false based on presence

// let btn = document.getElementById('btn');
// let css = getComputedStyle(btn);
// console.log(css.color);

// btn.style.cssText += 'backgroun:red;border:1px solid green';
// btn.setAttribute('style', 'color:white;background-color:green');

// btn.style.color = 'red';
// btn.style.backgroundColor = 'pink';

// let box = document.getElementById('box');
// console.log(box.className);
// box.className += ' dim'; //add a class

// //know list of class
// console.log(box.classList);
// for (let css of box.classList) {
//   console.log(css);
// }

// box.classList.add('dim');
// box.classList.remove('dim');
// box.classList.replace('color', 'dim'); //what to remove , what to add
// let result = box.classList.contains('color');
// console.log(result);

// let res1 = box.classList.toggle('dim'); //if not added add, if present remove it

// let box = document.getElementById('box');
// let width = box.offsetWidth; //border will be considered
// let height = box.offsetHeight; //border will be considered

// console.log(width);
// console.log(height);

// let h1 = box.clientHeight; //border is not included
// let w1 = box.clientWidth; //border is not included
