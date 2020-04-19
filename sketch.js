var bullet1,bullet2,bullet3,bullet4;
var wall1,wall2,wall3;
var p1,p2,p3,p4;

function setup() {
  createCanvas(1600,500);
  bullet1 = createSprite(1500, 100, 50, 25);
  bullet2 = createSprite(1500, 200, 50, 25);
  bullet3 = createSprite(1500, 300, 50, 25);
  bullet4 = createSprite(1500, 400, 50, 25);
  wall1 = createSprite(800, 150, 10, 1600);
  wall1.shapecolor="red";
  wall2=createSprite(800, 250, 10, 1600);
  wall2.shapecolor="red";
  wall3=createSprite(800, 350, 50, 1600);
  wall2.shapecolor="red";
  p1=createSprite(150, 100, 50, 50);
  p2=createSprite(150, 100, 50, 50);
  p3=createSprite(150, 100, 50, 50);
  p4=createSprite(150, 100, 50, 50);
}

function draw() {
  background(255,255,255); 
  bullet1.velocityX=-5;
  bullet2.velocityX=-10;
  bullet3.velocityX=-15; 
  bullet4.velocityX=-20;

  move();
  drawSprites();
}
function move(){
  if(bullet1.x - bullet2.x - bullet3.x - bullet4.x < bullet1.width/4 + bullet2.width/4 + bullet3.width/4 + bullet4.width/4
  && bullet2.x - bullet3.x - bullet4.x - bullet1.x < bullet1.width/4 + bullet2.width/4 + bullet3.width/4 + bullet4.width/4
  && bullet3.x - bullet4.x - bullet1.x - bullet2.x < bullet1.width/4 + bullet2.width/4 + bullet3.width/4 + bullet4.width/4
  && bullet4.x - bullet1.x - bullet2.x - bullet3.x < bullet1.width/4 + bullet2.width/4 + bullet3.width/4 + bullet4.width/4
  || bullet1.y - bullet2.y - bullet3.y - bullet4.y < bullet1.hight/4 + bullet2.hight/4 + bullet3.hight/4 + bullet1.hight/4
  && bullet2.y - bullet3.y - bullet4.y - bullet1.y < bullet1.hight/4 + bullet2.hight/4 + bullet3.hight/4 + bullet1.hight/4
  && bullet3.y - bullet4.y - bullet1.y - bullet2.y < bullet1.hight/4 + bullet2.hight/4 + bullet3.hight/4 + bullet1.hight/4
  && bullet4.y - bullet1.y - bullet2.y - bullet3.y < bullet1.hight/4 + bullet2.hight/4 + bullet3.hight/4 + bullet1.hight/4){
  bullet1.velocityX=-5;
  bullet2.velocityX=-10;
  bullet3.velocityX=-15; 
  bullet4.velocityX=-20;

  }
}