
var counter = 0;

function swap(selected) {
  document.getElementById('home')  .style.display = 'none';
  document.getElementById('coke')  .style.display = 'none';
  document.getElementById('sprite').style.display = 'none';
  document.getElementById('pepper').style.display = 'none';

  document.getElementById(selected).style.display = 'block';
}

function changeLook() {
  counter += 1;
  switch (counter) {
    case 1:
      document.getElementById('bodyColor')  .style.backgroundColor = "#ffcc66";
      document.getElementById('headerColor').style.backgroundColor = '#ffaa00';
      document.getElementById('footerColor').style.backgroundColor = '#e69900';
      break;
    case 2:
      document.getElementById('bodyColor')  .style.backgroundColor = "#009933";
      document.getElementById('headerColor').style.backgroundColor = '#00364d';
      document.getElementById('footerColor').style.backgroundColor = '#1aff66';
      break;
    case 3:
      document.getElementById('bodyColor')  .style.backgroundColor = "#9933ff";
      document.getElementById('headerColor').style.backgroundColor = '#ff80ff';
      document.getElementById('footerColor').style.backgroundColor = '#e6ccff';
      break;
    case 4:
      counter = 0;
      document.getElementById('bodyColor')  .style.backgroundColor = "#cc0000";
      document.getElementById('headerColor').style.backgroundColor = '#e6e6e6';
      document.getElementById('footerColor').style.backgroundColor = '#ff8080';
      break;
  }
}

function changeBack() {
  document.getElementById('bodyColor')  .style.backgroundColor = '#404040';
  document.getElementById('headerColor').style.backgroundColor = '#808080';
  document.getElementById('footerColor').style.backgroundColor = '#808080';
}
