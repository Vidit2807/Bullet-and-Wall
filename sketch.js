
var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(800,400);
  bullet=createSprite(60, 200, 100, 30);
wall=createSprite(720,200,thickness,height/2);

 speed=random(223,321);
 weight = random(30,52);
 thickness=random(22,83)
}

function draw() {
  background("Black");
  
  bullet.velocityX=speed;
  
  if(bullet.collide(wall))
  {
    bullet.velocityX=0;
    
   
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
   
     if(damage<10){
bullet.shapeColor="green";

     }
     if(damage>10){
      bullet.shapeColor="red";
      
           }
          
    drawSprites();
    
                }
              }
             

