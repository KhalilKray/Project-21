var Wall,Thickness;
var Bullet,Speed,Weight;

function setup() {
  createCanvas(1600,400);
  
  Bullet = createSprite(50,200,50,10);
  Bullet.shapeColor = color(248,248,255);
  
  Wall = createSprite(1200,200,Thickness,height/2);
  Wall.shapeColor = color(80,80,80);

  Speed = random(223,321);

  Weight = random(30,52);

  Thickness = random(22,83);
}

function draw() {
  background(0,0,0);  

  if(hasCollided(Bullet,Wall)) {
    Bullet.velocityX = 0;
    var Damage = 0.5 * Weight * Speed * Speed/(Thickness * Thickness * Thickness);
    if(Damage>10) {
      Wall.shapeColor = color(255,0,0)
    }

    if(Damage<10) {
      Wall.shapeColor = color(0,255,0);
    }
  }

   Bullet.velocityX = Speed;

  drawSprites();
}

function hasCollided(lbullet,lwall) {
  BulletRightEdge = lbullet.x + lbullet.width;
  WallLeftEdge = lwall.x;
  if(BulletRightEdge >= WallLeftEdge) {
    return true
  }
  return false;
}
