var bullet, wall;
var speed, weight, thickness;

function setup() {
createCanvas(1600,400);

speed = random(223,321);
weight = random(30,52);
thickness = random(22, 83);

bullet = createSprite(50, 200, 50, 5);
bullet.shapeColor = "white";
bullet.velocityX = speed;
bullet.debug = true;

 wall = createSprite(1200, 200, thickness, height/2);
 wall.shapeColor = color(80,80,80);

}

function draw() {
    background(0);  

    if(hasCollided(bullet,wall)){
       bullet.velocity =0;
      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
           
     
      if(damage > 10){
        wall.shapeColor = "red";
      }
      else{
        wall.shapeColor = "green";
      }
      
    }
       
    drawSprites();
}

function hasCollided(parameter1, parameter2){
bulletRightEdge = parameter1.x + parameter1.width;
wallLeftEdge = parameter2.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
else{
  return false;
}
}

 





