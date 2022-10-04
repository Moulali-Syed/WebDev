let d = document.getElementById('mydiv');
let b = document.getElementById('btn');

b.addEventListener('click', btnClicked); //default 3rd parameter is false means bubbling
d.addEventListener('click', divClicked);
document.body.addEventListener('click', bodyClicked);

function btnClicked(event) {
  console.log('btn clicked');
  event.stopPropogation();
}

function divClicked(event) {
  console.log('div clicked');
  event.stopPropogation();
}

function bodyClicked() {
  console.log('body clicked');
}

/*
body clicked
div clicked
btn clicked

*/
