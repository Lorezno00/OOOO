function setup() {
  const canvas = createCanvas(540, 540);
  canvas.parent('sketch-holder');
  windowResized()
}

function draw() {
  background(220)
  rectMode(CENTER);
  translate(width / 2, height / 2);
  rotate(frameCount*0.01)
  noStroke()
  fill(100, 150, 250);
  rect(0, 0, 300, 300);



  // Draw a line
  
  
}