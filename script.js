document.body.onload = addText;

function addText() {
  let div = document.createElement('div');
  let text = document.createTextNode(`Hello! I'm a div. More to come soon...`);
  div.appendChild(text);
  document.body.appendChild(div);
}