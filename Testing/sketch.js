function preload(){
  tree = loadModel('lowpolytree.obj', normalize);
}

function setup() {
  // put setup code here
  createCanvas(640, 480, WEBGL);
  background(100);
  frameRate(60);
}
function draw() {
  background(100);
  var x1 = map(mouseX, 0 , width, 0, 5);
  var y1 = map(mouseY, 0 , width, 0, 5);
  rotateY(x1);
  rotateX(y1);
  model(tree);
  
  // put drawing code here
  // background(100);
  // strokeWeight(1);
  // ellipse(width/2, height/2, 300);
  // xPoint = width/2 + (150 * cos(angle));
  // yPoint = height/2 + (150 * sin(angle));
  // stroke(200);
  // strokeWeight(1);
  // line(width/2, height/2, xPoint, yPoint);
  // stroke(51);
  // strokeWeight(5);
  // point(xPoint, yPoint);
  // angle = angle + 0.1;
}