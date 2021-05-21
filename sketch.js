var wall, thinkness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  thinkness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255);
  
  
  wall=createSprite(1200, 200, 60, height/2);
  wall.shapeColor=color(80,80,80);

  if(hasCollided(bullet,wall))
  {
    bullet.VelocityX=0;
    var damage=0.5 * weight * speed/(thinkness *thinkness *thinkness);

    if (damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if (damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }

}

function draw() {
  background(0); 
   
  drawSprites();
}

function hasCollided(Lbullet, Lwall)
{
  bulletRightEdge = Lbullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}