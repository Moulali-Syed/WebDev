let textbox = document.getElementById('textbox');

textbox.addEventListener('input', function () {
  var text = this.value;

  let char = text.length;
  document.getElementById('char').innerHTML = char;

  text = text.trim();
  let words = text.split(' ');
  //return element that is not blank
  let cleanList = words.filter(function (ele) {
    return ele != '';
  });
  document.getElementById('word').innerHTML = cleanList.length;
});
