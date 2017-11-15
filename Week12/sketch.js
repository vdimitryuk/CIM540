var interfaceItems = [];



function setup(){
    
    createCanvas(400,400)
    
    interfaceItems.push(new interface(100,100,50,color(255,0,0)))
}
   
function draw(){
    
    fill(0);
    ellipse(mouseX,mouseY,10,10)
    
    
}



function interface(tempX,tempY,tempBoxSize,tempColor){
    
    this.x = tempX;
    this.y = tempY;
    this.boxSize = TempBoxSize;
    this.setFill = tempColor;
    
    this.display = function{
        fill(this.setfill);
        rect(this.x,this.y,this.boxSize,this.boxSize)
        
    }
    
}