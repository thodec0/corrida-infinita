var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber1, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var jogar =1;
var fimdejogo=0;
var estadodejogo= jogar;


var barreira1,barreira2;

var reset,resetimg;



function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  resetimg= loadImage("reset.png");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);

  
  ghost=createSprite(300,300,30,30);
  ghost.addImage("climber",ghostImg );
ghost.scale=0.2;
ghost.debug=true;

reset=createSprite(300,300,50,50);
reset.addImage(resetimg); 
reset.scale=0.4;




barreira1=createSprite(70,300,1,600);

barreira2=createSprite(530,300,1,600);

climbersGroup=new Group();

doorsGroup=new Group();



}

function draw() {
  background(900);
  


if (estadodejogo==jogar){

reset.visible=false;

tower.velocityY = 1;

gerarclimbers();

  if(tower.y > 400){
      tower.y = 300
  }


if(keyDown('D')){
  ghost.velocityX=3;
}


if(keyDown('a')){
  ghost.velocityX=-3;
}

if(keyDown('space')){
  ghost.velocityY=-3
}

ghost.velocityY=ghost.velocityY+0.3;

if(keyDown('w')){

  ghost.velocityX=0;
}


if (ghost.y>600){
  



  estadodejogo=fimdejogo;
  
}
}
 if(estadodejogo==fimdejogo){
  tower.velocityY = 0;
  doorsGroup.setVelocityYEach(0);
  climbersGroup.setVelocityYEach(0);
  doorsGroup.destroyEach();
  climbersGroup.destroyEach();

if(mousePressedOver(reset)){
  resetar();
}
reset.visible=true;
 }







ghost.collide(climbersGroup);
ghost.collide(barreira1);
ghost.collide(barreira2);

  drawSprites();
   
}

function gerarclimbers(){

  if (frameCount%200==0){

    door=createSprite(200,-50);
    door.x=Math.round(random(100,400));
    door.addImage(doorImg);
 door.velocityY=1;
door.lifeTime=200;
ghost.depth =door.depth;
ghost.depth =ghost.depth+1;

    climber1=createSprite(200,16);
  climber1.x=door.x;
    climber1.addImage("climber1", climberImg );
    climber1.velocityY=1;
climber1.lifeTime=200;
climber1.debug=true;
  
doorsGroup.add(door);

climbersGroup.add(climber1);

  }



}

 function resetar(){
estadodejogo=jogar;



 }
