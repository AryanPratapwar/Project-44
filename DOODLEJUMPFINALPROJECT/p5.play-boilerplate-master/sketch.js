var bkg,Wpad,Bpad,Gpad,Jdoodler;
var bkgSprite;
var gamestate = 0;

function preload(){
  //for background image for background sprite
  bkg=loadImage("Images/BKG.png");
}

function setup() {
  createCanvas(1500,580);
  bkgSprite=createSprite(710,250);
  bkgSprite.addImage("bkg",bkg);
}

function draw() {
    background(255)



    drawSprites();
    if(gamestate==0){
      textSize(50);
      text("DOODLE JUMP RE",500,90);
      textSize(15);
      text("Press Space To Continue",650,150)
    }

    if(keyDown("space") ){
      gamestate=1;
    }

    if(){}
}