function setup() {
    createCanvas(600, 450);
    background("black");
  }
  
  function draw(){
    stroke("white")
    fill("gray")
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
    
  }