let draft, ready;
function preload() {
  ready = loadImage("Foto 23.jpg");
  draft = loadImage("Foto 23.jpg");
}
function setup() {
  createCanvas(900, 900);
  noCursor();
  cursor(20, -10);
  image(ready, 0, 0, width, height,0,0,ready.width,ready.height);
  image(draft, 0, 0, width, height,0,0,draft.width,draft.height, COVER);
}

function mouseDragged() {
  copy(ready, mouseX, mouseY, 50, 100, mouseX, mouseY, 20, 40);
}
