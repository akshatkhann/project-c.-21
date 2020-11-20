var speed,weight,bullet,bullet2,bullet3,bullet4,wall,wall3,wall2,wall4,weight2,weight3,weight4,deformation,deformation2,deformation3,deformation4,thickness,thickness2,thickness3,thickness4,damage,damage2,damage3,damage4;


function setup() {
  createCanvas(1600,1200);
 
bullet=createSprite(50,100,40,10)
bullet2=createSprite(50,200,40,10)
bullet3=createSprite(50,300,40,10)
bullet4=createSprite(50,400,40,10)
speed=random(55,90)
speed2=random(55,90)
speed3=random(55,90)
speed4=random(55,90)

weight=random(30,52)
thickness=random(22,84)
speed=random(223,321)

weight2=random(30,52)
    thickness2=random(22,83)
    speed2=random(223,321)

    weight3=random(30,52)
    thickness3=random(22,83)
    speed3=random(223,321)

    weight4=random(30,52)
    thickness4=random(22,83)
    speed4=random(223,321)




wall=createSprite(250,150,4000,30)
wall2=createSprite(250,250,4000,30)
wall=createSprite(250,350,4000,30)
wall4=createSprite(1600,250,30,4000)
bullet.velocityX=speed;
bullet2.velocityX=speed2;
bullet3.velocityX=speed3;
bullet4.velocityX=speed4;
}
function draw() {
  background(255,255,255);  
  
  if(bullet.isTouching(wall4)) {
   
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
        bullet.velocityX=0
  
  
        if(damage<10)
        {
      
      
      
      
          bullet.shapeColor=color(255,0,0)
        }
    
  
      



      if(damage>10)
      {
    
    
    
    
        bullet.shapeColor=color(0,255,0)
      }

    }

  if(bullet2.isTouching(wall4)) {
    
    bullet2.velocityX=0
    damage=0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2)
  
    if(damage<10)
    {
  
  
  
  
      bullet2.shapeColor=color(255,0,0)
    }


  



  if(damage>10)
  {




    bullet2.shapeColor=color(0,255,0)
  }
  
  }


  if(bullet3.isTouching(wall4)) {
    
    bullet3.velocityX=0
  
  
  
    damage=0.5*weight3*speed3*speed3/(thickness3*thickness3*thickness3)
  
    if(damage<10)
    {
  
  
  
  
      bullet3.shapeColor=color(255,0,0)
    }


  



  if(damage>10)
  {




    bullet3.shapeColor=color(0,255,0)
  }
  
  }   
  if(bullet4.isTouching(wall4)) {
   
    bullet4.velocityX=0
    damage=0.5*weight4*speed4*speed4/(thickness4*thickness4*thickness4)

 
    if(damage<10)
    {
  
  
  
  
      bullet4.shapeColor=color(255,0,0)
    }


  



  if(damage>10)
  {




    bullet4.shapeColor=color(0,255,0)
  }
 
 
 
 
  }         

                drawSprites();

  
}





