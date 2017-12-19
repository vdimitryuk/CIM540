var posX = 0;
var posY = 0;
var bgR = 0;
var bgG = 0;
var bgB = 0;
var directionY = false;

var lec, rec;

var startButton;
var startBounce = false;

var lastX, lastY;
var choosenColor;

function setup() {
    createCanvas(500, 400);
    choosenColor = "black";

    bgR = 100;
    bgG = 100;
    bgB = 100;
    posX = 200;
    posY = 300;
    
    lec = 0;
    rec = 0;
    
    lastX = mouseX;
    lastY = mouseY;
}

function keyTyped() {
    if (key === 'a') {
        if (lec == 0) lec = 255;
        else lec = 0;
    } else if (key === 'l') {
        if (rec == 0) rec = 255;
        else rec = 0;
    }
}

function mouseClicked() {
    var d1 = dist(mouseX, mouseY, 75, 325);
    var d2 = dist(mouseX, mouseY, 325, 325);
    
    if (d1 < 50) {
        choosenColor = "red";
    } else if (d2 < 50) {
        choosenColor = "blue";
    } else {
        choosenColor = "black";
    }
    
    posX = 200;
    posY = 300;
    return false;
}

function mouseMoved() {
    var dX = mouseX - lastX;
    var dY = mouseY - lastY;
    
    posX += dX;
    posY += dY;
    
    if (posX < 50) posX = 50;
    if (posX > 350) posX = 350;
    if (posY < 250) posY = 250;
    if (posY > 550) posY = 550;
    
    lastX = mouseX;
    lastY = mouseY;
    return false;
}

function mouseWheel(event) {
    var newScale = bgR + (event.delta / 20);
    if (newScale > 255) newScale = 255;
    if (newScale > 0) {
        bgR = newScale;
        bgG = newScale;
        bgB = newScale;
    }
    return false;
}

function drawCat(width, height) {
    strokeWeight(0);
    
    //Paws
    fill(choosenColor);
    ellipse(posX, posY, 50, 50);
    ellipse(posX - (width / 7), posY + (height / 10), 50, 50);
    ellipse(posX + (width / 1.5), posY, 50, 50);
    ellipse(posX + (width / 1.5) + (width / 7), posY + (height / 10), 50, 50);
    
    //Tail
    fill(choosenColor);
    rotate(radians(-25));
    rect(posX - (width / 1.5), posY - (height / 1.3), width / 4, height);
    applyMatrix();
    resetMatrix();    
    
    //Body
    fill(choosenColor)
    ellipse(posX + (width / 3), posY - (height / 3), width, height);
    
    fill("white")
    ellipse(posX + (width / 3), posY - (height / 3), width/2, height/2);
    
    //Ears
    fill(choosenColor);
    rect(posX - (width / 8), posY - (height / .87), 60, 60);
    rect(posX + (width / 2), posY - (height / .87), 60, 60);
    
     fill("white");
    rect(posX - (width / 10), posY - (height / 0.9), 60, 60);
    rect(posX + (width / 2.1), posY - (height / 0.9), 60, 60);
    
    fill(choosenColor)
    ellipse(posX + (width / 3), posY - (height / 1.13), width / 1.1, height / 1.5);
    
    //Eyes
    fill("yellow")
    ellipse(posX + (width / 3) - (width / 6), posY - (height / 1.1), width / 8, height / 18);
    ellipse(posX + (width / 3) + (width / 6), posY - (height / 1.1), width / 8, height / 18);
    
    fill(lec);
    ellipse(posX + (width / 3) - (width / 6), posY - (height / 1.1), width / 10, height / 20);
    fill(rec);
    ellipse(posX + (width / 3) + (width / 6), posY - (height / 1.1), width / 10, height / 20);
    
    //Nose
    fill("pink");
 //   triangle(260, 155, 280, 155, 270, 175)
    triangle(posX + 60, posY - 245, posX + 80, posY - 245, posX + 70, posY - 225);

    fill(255, 0, 0, 128);
    ellipse(75, 325, 100, 100);
    fill(0, 0, 255, 128);
    ellipse(325, 325, 100, 100);
}

function draw() {
    background(bgR, bgG, bgB);
    drawCat(200, 300);
}
