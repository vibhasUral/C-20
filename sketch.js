var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect =  createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,40);
  fixedRect.shapeColor = " limeGreen"
  movingRect.shapeColor = "limeGreen" 
}

function draw() {

  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&

    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&

    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
       {
    fixedRect.shapeColor = " orange"
  movingRect.shapeColor = "orange"
  }

  else{ 
    fixedRect.shapeColor = " limeGreen"
  movingRect.shapeColor = "limeGreen"
  }
  drawSprites();
} 