const Engine =  Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bottle,ground,randomNo,virusImage,groundImage,man,manImg,iground,bgImg;
var sling1,engine,world;
var virusGroup,virus;


function preload(){
virusImage = loadImage("images/temp.png");

manImg = loadImage("images/man.png");
bgImg = loadImage("images/bg.png");

}

function setup() {
  createCanvas(800,400);
  
engine = Engine.create();
world = engine.world;

var virus = createSprite(800,randomNo,10,10);

virusGroup = new Group();
ground = createSprite(100,250,70,90);


//man = createSprite(75,230,30,10);
//man.addImage(manImg);
//man.scale = 0.06;
var man_options={
restitution:0.5,
density:0.9,
friction:0.6

}

man = Bodies.rectangle(75,200,30,10,man_options)
World.add(world,man)
//iground = createSprite(100,240,100,10);
sling1 = new slingshot(man,{x:100,y:200});

}

function draw() {
 background(bgImg)


 Engine.update(engine);

 

 imageMode(CENTER)
 image(manImg,man.position.x,man.position.y,50,50)
 //man.velocityY = 9;
// man.collide(iground)
 
//iground.visible = false;

 


spawnVirus();

sling1.display();

//if(virusGroup.isTouching(man)){

//virusGroup.destroyEach();

//}

if(virus.x-man.x>virus.width/2+man.width/2&&
  man.x-virus.x>man.width/2+virus.width/2&&
  virus.y-man.y>virus.height/2+man.height/2&&
  man.y-virus.y>man.height/2+virus.height/2
  ){
 
    virus.destroyEach();
}

  drawSprites();

}

function mouseDragged(){

  Matter.Body.setPosition(man,{x:mouseX,y:mouseY})

}

function mouseReleased(){

sling1.fly()
  
}

function spawnVirus(){

  

if(frameCount%60===0){

  randomNo = Math.round(random(100,350));
  
  virus.addImage(virusImage)
  virus.scale= 0.09

  virus.velocityX = -3;
  virus.shapeColor="white";
  virus.lifetime = 300;

 // virusGroup.add(virus);
   

}

}


