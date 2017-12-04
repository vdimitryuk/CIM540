var house;

function setup(){
  createCanvas(250, 250);

  house = loadModel('houseF.obj');
}
function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(house);
}