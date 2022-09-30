
function preload(){
  playerImg=loadImage("player.png")
  zombie=loadImage('zombie.png')
  bulletImage=loadImage('bullet.png')
}

function setup() {  
  createCanvas(800, 600);

  player=createSprite(400,50)
  player.addImage(playerImg)
  player.scale=0.2

  enemyGroup=createGroup()
  
}
function draw() {
  background("black")
  if(keyDown('left')){
    player.x-=5
  }
  if(keyDown('right')){
    player.x+=5
  }
  enemies()
  if(keyDown('space')){
    if(frameCount%5==0){
      bullets()
    }
  }
  drawSprites()
}

function enemies(){
  if(frameCount%100==0){
    enemy=createSprite(random(50,750),600,10,10)
    enemy.velocityY=-3
    enemy.addImage(zombie)
    enemy.scale=0.4
    enemyGroup.add(enemy)
  }
}
function bullets(){
  bullet=createSprite(player.x,player.y)
  bullet.velocityY=4
  bullet.addImage(bulletImage)
  bullet.scale=0.3
 player.depth+=bullet.depth
}