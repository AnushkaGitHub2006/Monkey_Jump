var scene,ground,sceneimg;
var bananaimg,obstaclesimg;
var momkeyrun;
var bananagr,obstaclesgr;
var score;

var gamestate=1;
var PLAY=1;
var END=0;

function preload(){
 sceneimg=loadImage("jungle.png"); 
  
  monkeyrun=loadAnimation('Monkey_01.png','Monkey_02.png',
  'Monkey_03.png','Monkey_04.png','Monkey_05.png','Monkey_06.png',
  'Monkey_07.png','Monkey_08.png','Monkey_09.png','Monkey_10.png'
  );
     
   bananaimg=loadImage('banana.png');
   obstaclesimg=loadImage('stone.png');
}

function setup() {
  createCanvas(600, 600);
  scene=createSprite(300,300,600,600);
  scene.addImage('backimg',sceneimg);
  scene.velocityX=-5;
  scene.x=scene.width/2;
  
  monkey=createSprite(50,520,30,30);
  monkey.addAnimation('monkeyimg',monkeyrun);
  monkey.scale=0.2;
  
  bananagr=new Group();
  obstaclesgr=new Group();
  
  ground=createSprite(300,530,600,10);
  ground.visible=false;
  
}

function draw() {
  background(220);
  
  if(gamestate=PLAY){
  score=score+Math.round(frameCount/frameRate());
    
     if(ground.x<=0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space") &&  monkey.y >= 310 ){
    monkey.velocityY=-15;
  }
   
    monkey.velocityY=monkey.velocityY+0.8;
   
   stones();
   bananas();
   
   if(monkey.isTouching(bananagr)){
   bananagr.destroyEach(); 
     switch(score){
       case 10:player.scale=0.12;
         break;
       case 20:player.scale=0.14;
         break;
       case 30:player.scale=0.16;
         break;
       case 40:player.scale=0.12;
         break;
       case 40:player.scale=0.12;
          break;
      
          default:break;
   }
   
  
  
  if(stonegr.isTouching(monkey)){

   monkey.scale=0.2;
}


  }
    
  drawSprites();
}

function bananas(){
  if(World.frameCount%80==0){
    var banana= createSprite(400,330,30,30);
    banana.addImage("banana",bananai);                       
    banana.scale=0.08;
    banana.y=randomNumber(120,190);  
   // console.log(banana.x);
    banana.velocityX=-5;
    banana.lifetime=150;
  
    bananagr.add(banana);
    }
}

function stones(){
   if(World.frameCount%300==0){
    var stone = createSprite(400,340,30,30);
    
    stone.setAnimation("obstaclesimg",obstacles);
    stone.scale=0.1;
    stone.depth=monkey.depth;
    monkey.depth=monkey.depth+1;
    
    stone.x=random(100,210);
    
   stone.velocityX=-5;
    stone.lifetime=150;
    
   stonegr.add(stone);
   }
}
  
 
}
