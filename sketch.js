var hhIMG
var vhIMG
var aliceIMG
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22,cardboard23
function preload(){
hhIMG=loadImage("hh.png")
vhIMG=loadImage("vh.png")
aliceIMG=loadImage("alice.png")
coinIMG=loadImage("coin.png")
}
 
function setup(){
createCanvas (windowWidth,windowHeight)
var h=windowHeight
 cardboard1 = createSprite(100,((150/h)*100));
cardboard1.addImage(hhIMG)
cardboard1.scale=0.25
 cardboard2 = createSprite(95,6,20,100);
cardboard2.addImage(vhIMG)
cardboard2.scale=0.09
 cardboard3 = createSprite(98,104,140,20);
cardboard3.addImage(hhIMG)
cardboard3.scale=0.1
 cardboard4 = createSprite(190,40,100,20);
 cardboard4.addImage(hhIMG)
 cardboard4.scale=0.1
 cardboard5 = createSprite(190,135,20,100);
 cardboard5.addImage(vhIMG)
cardboard5.scale=0.1
 cardboard6 = createSprite(76,190,20,100);
 cardboard6.addImage(vhIMG)
cardboard6.scale=0.1
 cardboard7 = createSprite(160,225,100,20);
 cardboard7.addImage(hhIMG)
 cardboard7.scale=0.1
 cardboard8 = createSprite(260,205,20,100);
 cardboard8.addImage(vhIMG)
cardboard8.scale=0.1
 cardboard9 = createSprite(270,105,100,20);
 cardboard9.addImage(hhIMG)
cardboard9.scale=0.1
 cardboard10 = createSprite(285,25,20,100);
 cardboard10.addImage(vhIMG)
cardboard10.scale=0.1
 cardboard11 = createSprite(14,272,100,20);
 cardboard11.addImage(hhIMG)
 cardboard11.scale=0.1
 cardboard12 = createSprite(5,160,20,100);
 cardboard12.addImage(vhIMG)
cardboard12.scale=0.1
 cardboard13 = createSprite(105,317,20,100);
 cardboard13.addImage(vhIMG)
cardboard13.scale=0.1
 cardboard14 = createSprite(370,25,100,20);
 cardboard14.addImage(hhIMG)
cardboard14.scale=0.1
 cardboard15 = createSprite(325,180,20,100);
 cardboard15.addImage(vhIMG)
cardboard15.scale=0.1
 cardboard16 = createSprite(195,287,100,20);
 cardboard16.addImage(hhIMG)
cardboard16.scale=0.1
 cardboard17 = createSprite(350,270,100,20);
 cardboard17.addImage(hhIMG)
cardboard17.scale=0.1
 cardboard18 = createSprite(394,120,20,100);
 cardboard18.addImage(vhIMG)
cardboard18.scale=0.1
 cardboard19 = createSprite(45,380,20,100);
 cardboard19.addImage(vhIMG)
cardboard19.scale=0.1
 cardboard20 = createSprite(155,370,20,100);
 cardboard20.addImage(vhIMG)
cardboard20.scale=0.1
 cardboard22 = createSprite(335,320,140,20);
 cardboard22.addImage(hhIMG)
cardboard22.scale=0.1
 cardboard23 = createSprite(230,390,20,100);
 cardboard23.addImage(vhIMG)
cardboard23.scale=0.1

coin=createSprite(345,370)
coin.addImage(coinIMG)
coin.scale=0.1

 alice = createSprite(20,25,18,18);
alice.addImage(aliceIMG)
alice.scale=0.15
}

function draw(){

background("blue")








    drawSprites()
}




