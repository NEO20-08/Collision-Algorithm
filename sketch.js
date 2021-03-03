var fixedRect,movingRect;
var gameObj1,gameObj2,gameObj3,gameObj4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(300,200,40,60);
  movingRect.shapeColor = "yellow";
  gameObj1= createSprite(100, 200, 50, 50);
  gameObj1.shapeColor = "red";
  gameObj2 = createSprite(200, 200, 50, 50);
  gameObj2.shapeColor = "red";
  gameObj2.velocityX = 1;
  gameObj2.velocityY = 1;
  gameObj3 = createSprite(300, 200, 50, 50);
  gameObj3.shapeColor = "red";
  gameObj4 = createSprite(400, 200, 50, 50);
  gameObj4.shapeColor = "red";
}

function draw() {
  background("black");  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

   if( isTouching(movingRect,gameObj4)){
 gameObj4.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  }
  else {
    gameObj4.shapeColor = "red";
    movingRect.shapeColor = "yellow";
  }
bounceOff(gameObj2,movingRect);
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2 ){
    return true;
  }
  else {
    return false;
  }
}

function bounceOff(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX*(-1);
    }
  
    if(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2 ){
      object1.velocityY =  object1.velocityY*(-1);
    }
}



