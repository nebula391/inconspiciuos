const favicon = document.getElementById('favicon');

function sld() {
  favicon.setAttribute('href', 'icons/slides.png');
}
function doc() {
  favicon.setAttribute('href', 'icons/gdocs.png');
}
function clas() {
  favicon.setAttribute('href', 'icons/class.png');
}
function ixl() {
  favicon.setAttribute('href', 'icons/ixl.png');
}
function setTitle() {
  var x = document.getElementById('thingo').value;
  document.title = x;
}

function newGame(p2, wide, high) {
  var y = document.getElementById('gameFrame');
  y.setAttribute('src', 'p2');
  var gamew = wide;
  var gameh = high;
  var GameLink = p2;
  var x = document.createElement('IFRAME');
  x.setAttribute('src', GameLink);
  x.setAttribute('width', gamew);
  x.setAttribute('height', gameh);
  x.setAttribute('id', 'gameFrame');
  x.setAttribute('fullscreen', 'true');
}
