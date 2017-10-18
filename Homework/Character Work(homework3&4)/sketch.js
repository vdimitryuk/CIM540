var posX = 0;
var posY = 0;
var bgR = 0;
var bgG = 0;
var bgB = 0;
var directionY = false;

var startButton;
var startBounce = false;

function setup() {
    createCanvas(1000, 500);

    bgR = 100;
    bgG = 100;
    bgB = 100;
    posX = 200;
    posY = 400;
}

function drawCat(width, height) {
    strokeWeight(0);
    
    //Paws
    fill("black");
    ellipse(posX, posY, 50, 50);
    ellipse(posX - (width / 7), posY + (height / 10), 50, 50);
    ellipse(posX + (width / 1.5), posY, 50, 50);
    ellipse(posX + (width / 1.5) + (width / 7), posY + (height / 10), 50, 50);
    
    //Tail
    fill("black");
    rotate(radians(-25));
    rect(posX - (width / 1.5), posY - (height / 1.3), width / 4, height);
    applyMatrix();
    resetMatrix();    
    
    //Body
    fill("black")
    ellipse(posX + (width / 3), posY - (height / 3), width, height);
    
    fill("white")
    ellipse(posX + (width / 3), posY - (height / 3), width/2, height/2);
    
    //Ears
    fill("black");
    rect(posX - (width / 8), posY - (height / .87), 60, 60);
    rect(posX + (width / 2), posY - (height / .87), 60, 60);
    
     fill("white");
    rect(posX - (width / 10), posY - (height / 0.9), 60, 60);
    rect(posX + (width / 2.1), posY - (height / 0.9), 60, 60);
    
    fill("black")
    ellipse(posX + (width / 3), posY - (height / 1.13), width / 1.1, height / 1.5);
    
    //Eyes
    fill("yellow")
    ellipse(posX + (width / 3) - (width / 6), posY - (height / 1.1), width / 8, height / 18);
    ellipse(posX + (width / 3) + (width / 6), posY - (height / 1.1), width / 8, height / 18);
    
    fill("black")
    ellipse(posX + (width / 3) - (width / 6), posY - (height / 1.1), width / 10, height / 20);
    ellipse(posX + (width / 3) + (width / 6), posY - (height / 1.1), width / 10, height / 20);
    
    //Nose
    fill("pink")
    triangle(260, 155, 280, 155, 270, 175)


}
function drawball {
    frameRate(60);
    background(255);

    if (startBounce == true) {

        //Yarn Ball
    fill("red")
    ellipse(posX + 250, posY, width/2, height/3);
        
        if (directionY == false) {
            posY++;
        } else {
            posY--;
        }

        if (posY >= height) {
            directionY = true;
        }

        if (posY <= 0) {
            directionY = false;
        }
    }
function draw() {
    background(bgR, bgG, bgB);
    drawCat(200, 300);
    drawball(300,400)
}


