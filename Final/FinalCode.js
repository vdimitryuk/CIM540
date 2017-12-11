var bg, text;
var t1, t2, t3, t4, t5;
var m1, m2, m3, m4, m5;
var r1, r2, r3, r4, r5;
var modelScale;
function setup() {
    bg = loadImage('./bookshelf_empty.png');
    text = loadImage('./codingtext.png');
    createCanvas(400, 400, WEBGL); 
    
    m1 = loadModel('./Elephant.obj');
    m2 = loadModel('./Rocket.obj');
    m3 = loadModel('./sleigh.obj');
    m4 = loadModel('./rubiks.obj');
    m5 = loadModel('./greenPepper.obj');
    r1 = r2 = r3 = r4 = r5 = 0;
    
    modelScale = 1.0;
}

function mouseWheel(event) {
    var newScale = modelScale + (event.delta / 20);
    if (newScale > 0) {
        modelScale = newScale;   
    }
    return false;
}

function draw() {
    var yMove = map(mouseY, 0, height, 400, -400);
    var xMove = map(mouseX, 0, width, 400, -400);
    var zthing = ((400/2.0) / tan(PI*30.0 / 180.0)) + 0;
    camera(0, 0,zthing, 0, 0, 0, 0, 1, 0);
    
    background(200);
    var dirX = (mouseX / width - 0.5) *2;
    var dirY = (mouseY / height - 0.5) *(-2);
  
    push(); texture(bg); plane(250); pop();
    

    fill(55, 83, 115); push();
    translate(-70, -57, 75); rotateX(PI); rotateY(PI + r1); scale(modelScale * 3); 
    model(m1); pop();
    
    fill(157, 40, 35); push(); 
    translate(70, -50 , 75); rotateX(PI); rotateY(PI + r2); scale(modelScale * 3); 
    model(m2); pop();
    
    fill(16, 9, 50); push();
    translate(0, 40, 75); rotateX(PI); rotateY(PI + r3); scale(modelScale * 20); 
    model(m3); pop();
    
    push(); texture(text);translate(0, -15 ,75); scale(0.5); plane(200); pop();
    
    fill(239, 201, 0); push(); 
    translate(-70, 83, 75); rotateX(PI); rotateY(PI + r4); scale(modelScale * 100); 
    model(m4); pop();
    
    fill(13, 59, 2); push();
    translate(70, 80, 75); rotateX(PI); rotateY(PI + r5); scale(modelScale * 8); 
    model(m5); pop();
    
    r1 += Math.random() / 30;
    r2 += Math.random() / 20;
    r3 += Math.random() / 40;
    r4 += Math.random() / 15;
    r5 += Math.random() / 20;
}