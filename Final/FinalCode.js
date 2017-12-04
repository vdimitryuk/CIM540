var bg;
var y = 0;
var house;

function setup(){
  createCanvas(250, 250);

  house = loadModel('houseF.obj');
}
function draw(){
  background(bg);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(house);
}

function setup() {

  bg = loadImage("bookshelf_empty.png");
  createCanvas(640, 751);
}

function draw() {
  background(bg);

     stroke(226, 204, 0);
  line(0, y, width, y);

  
  if (y > height) 
    y = 0;
      
  }
