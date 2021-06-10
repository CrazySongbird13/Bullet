var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 10, 30);
  
  thickness = random(22,83);
  wall = createSprite(1200, 200, thickness, height/2);

  speed = random(223, 321);
  weight = random(30, 52)
}

function draw() {
  background(0,0,0);  
  bullet.shapeColor = color(255, 255, 255);
 
  

  car.velocityX = speed;
  if(hasCollided(bullet, wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

if (damage > 10)
{
  wall.shapeColor = color(255, 0, 0);
}
if(damage < 10)
{
  wall.shapeColoer = color(0, 255, 0);
}
}
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.wdith;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
{
  return true
}
return false;

}