var car1,wall1,car2,wall2,car3,wall3;
var speed,weight;

function setup() {
  createCanvas(1250,600);

  speed=random(55,90);
  weight=random(400,1500);

  car1=createSprite(50, 75, 50, 50);
  car2=createSprite(50, 270, 50, 50);
  car3=createSprite(50, 450, 50, 50);

  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;

  wall1=createSprite(1150,90, 40, 150);
  wall1.shapeColor=color(80,80,80);

  wall2=createSprite(1150,270, 40, 150);
  wall2.shapeColor=color(80,80,80);

  wall3=createSprite(1150,450, 40, 150);
  wall3.shapeColor=color(80,80,80);
 
}

function draw() {
  background(0);  

  if(wall1.x-car1.x<(car1.width+wall1.width)/2){

    car1.velocityX=0;

    var deformation=0.5*weight*speed*speed/22500;

    if(deformation>180){
       car1.shapeColor=color(255,0,0);

    }

    if(deformation<180 && deformation>100){
      car1.shapeColor=color(230,230,0);

    }

    if(deformation<100){
      car1.shapeColor=color(0,255,0);
    }
  }



  if(wall2.x-car2.x<(car2.width+wall2.width)/2){

    car2.velocityX=0;

    var deformation=0.5*weight*speed*speed/22500;

    if(deformation>180){
       car2.shapeColor=color(255,0,0);

    }

    if(deformation<180 && deformation>100){
      car2.shapeColor=color(230,230,0);

    }

    if(deformation<100){
      car2.shapeColor=color(0,255,0);
    }
  }


  if(wall3.x-car3.x<(car3.width+wall3.width)/2){

    car3.velocityX=0;

    var deformation=0.5*weight*speed*speed/22500;

    if(deformation>180){
       car3.shapeColor=color(255,0,0);

    }

    if(deformation<180 && deformation>100){
      car3.shapeColor=color(230,230,0);

    }

    if(deformation<100){
      car3.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}