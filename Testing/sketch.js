

function preload(){
 dolphin      = loadModel('13182_LeapingDolphinStatue_v1_NEW.obj', true);
 thinker      = loadModel('the_thinker.obj', true);
 blankTexture = loadImage('blank_texture.jpg');
 gridTexture  = loadImage('grid.jpg');
 palmTree     = loadModel('MY_PALM.obj');
}

function setup() {
  // put setup code here
  createCanvas(1200, 700, WEBGL);
  frameRate(5);
}
function draw() {
directionalLight(200, 20, 200, -200);
directionalLight(220, 0, 100, -5000);
background(22);
cube();
earth();
palm();
}

function cube(){
  push();
  ambientMaterial(222, 200, 210);
  rotateY(radians(180));
  rotateZ(radians(10));
  xR = map(mouseX, 0, width, 0, 1);
  yR = map(mouseY, height, 0, 0, 1);
  rotateX(yR);
  rotateY(xR);
  texture(blankTexture);
  scale(2);
  model(thinker);
  //box(200, 200, 200);
  pop();
}

function earth(){
  push();
  texture(gridTexture);
  translate(0, 300);
  rotateX(radians(90));
  plane(5000, 5000);
  pop();

  push();
  translate(0, 300, -5000);
  plane(5000,5000);
  pop();
}

function palm() {
  push();
  rotateX(radians(180));
  translate(400, -600, 200);
  model(palmTree);
  pop();

  push();
  rotateX(radians(180));
  rotateY(radians(180));
  translate(400,-600,-200);
  model(palmTree);
  pop();
  }
  