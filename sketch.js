var carromBoardIMG;
var strikerImg;
var striker1;
var striker;
var blackCoin;
var whiteCoin;
var blackcoinImg;
var whitecoinImg;
var blackCoin2;
var whiteCoin2;
var blackCoin3;
var whiteCoin3;
var blackCoin4;
var whiteCoin4;
var blackCoin5;
var whiteCoin5;
var blackCoin6;
var whiteCoin6;
var blackCoin7;
var whiteCoin7;
var blackCoin8;
var whiteCoin8;
var blackCoin9;
var whiteCoin9;




function preload() {
 carromBoardIMG = loadImage("images/board.png")   ;
 strikerImg =loadImage("images/striker.png");
 blackcoinImg = loadImage("images/blackcoin.png");
 whitecoinImg = loadImage("images/whitecoin.png")
}
function setup(){
   createCanvas(displayWidth-700,displayHeight-150)
   blackCoin= createSprite(680,450,10,10);
   blackCoin.addImage(blackcoinImg);
   blackCoin.scale = 0.1;
   blackCoin2= createSprite(700,450,10,10);
   blackCoin2.addImage(blackcoinImg);
   blackCoin2.scale = 0.1;
   blackCoin3= createSprite(720,450,10,10);
   blackCoin3.addImage(blackcoinImg);
   blackCoin3.scale = 0.1;
   blackCoin4= createSprite(740,450,10,10);
   blackCoin4.addImage(blackcoinImg);
   blackCoin4.scale = 0.1;
   blackCoin5= createSprite(760,450,10,10);
   blackCoin5.addImage(blackcoinImg);
   blackCoin5.scale = 0.1;
   blackCoin6= createSprite(780,450,10,10);
   blackCoin6.addImage(blackcoinImg);
   blackCoin6.scale = 0.1;
   blackCoin7= createSprite(790,450,10,10);
   blackCoin7.addImage(blackcoinImg);
   blackCoin7.scale = 0.1;
   blackCoin8= createSprite(810,450,10,10);
   blackCoin8.addImage(blackcoinImg);
   blackCoin8.scale = 0.1;
   blackCoin9= createSprite(830,450,10,10);
   blackCoin9.addImage(blackcoinImg);
   blackCoin9.scale = 0.1;
   whiteCoin = createSprite(590,450,10,10);
   whiteCoin.addImage(whitecoinImg);
   whiteCoin.scale =0.1;
   whiteCoin2 = createSprite(570,450,10,10);
   whiteCoin2.addImage(whitecoinImg);
   whiteCoin2.scale =0.1;
   whiteCoin3 = createSprite(550,450,10,10);
   whiteCoin3.addImage(whitecoinImg);
   whiteCoin3.scale =0.1;
   whiteCoin4 = createSprite(530,450,10,10);
   whiteCoin4.addImage(whitecoinImg);
   whiteCoin4.scale =0.1;
   whiteCoin5 = createSprite(520,450,10,10);
   whiteCoin5.addImage(whitecoinImg);
   whiteCoin5.scale =0.1;
   whiteCoin6 = createSprite(490,450,10,10);
   whiteCoin6.addImage(whitecoinImg);
   whiteCoin6.scale =0.1;
   whiteCoin7 = createSprite(470,450,10,10);
   whiteCoin7.addImage(whitecoinImg);
   whiteCoin7.scale =0.1;
   whiteCoin8 = createSprite(450,450,10,10);
   whiteCoin8.addImage(whitecoinImg);
   whiteCoin8.scale =0.1;
   whiteCoin9= createSprite(430,450,10,10);
   whiteCoin9.addImage(whitecoinImg);
   whiteCoin9.scale =0.1;


   striker = createSprite(650,750,10,10);
   striker.addImage(strikerImg);
   striker.scale = 0.2;
}

function draw(){
background(carromBoardIMG);
    
 drawSprites();       
}

function mouseDragged(){
  
}


function mouseReleased(){
  
}

function keyPressed(){
   
}

