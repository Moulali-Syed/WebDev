function changeBG(color) {
  document.body.style.backgroundColor = color;
  let txt = document.getElementsByClassName('text');
  if (color == '#000000') {
    for (let elem of txt) {
      elem.style.color = 'white';
    }
  } else {
    for (let elem of txt) {
      elem.style.color = 'black';
    }
  }
}
