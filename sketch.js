function setup() {
  createCanvas(1000,800);
  a=createSprite(400, 200, 50, 50);
  b= createSprite(300, 100, 50, 50);
  a.shapeColor = "#FFFF00";
  b.shapeColor = "#0000FF"
}

function draw() {
  background(255,255,255);  
a.y = World.mouseY;
a.x = World.mouseX;

console.log(a.x-b.x);
drawSprites();

if((a.x - b.x) <= ((a.width/2) +(b.width/2)) &&
(b.x - a.x) <= ((a.width/2) +(b.width/2)) &&
(a.y - b.y) <= ((a.height/2) +(b.height/2)) &&
(b.y- a.y) <= ((a.height/2) +(b.height/2)) 


)
{
  a.shapeColor = "#FF0000";
  b.shapeColor = "#FF0000";
}

else 
{
  a.shapeColor = "#FFFF00";
  b.shapeColor = "#0000FF"
}
  
 
  
}