var espaco, espacoImg;
var foguete, fogueteImg;
var ufo, ufoImg;
var star, starImg;
var pontuacao = 0;
var grupoDeStar;
var grupoDeUfo;
var estado = INICIO;

function preload() {
  espacoImg = loadImage("espaco.png");

  fogueteImg = loadImage("foguete.png");

  ufoImg = loadImage("ufo.png");

  starImg = loadImage("star.png");
}

function setup() {
  createCanvas(500, 500);

  espaco = createSprite(200, 200);
  espaco.addImage("cenario", espacoImg);
  espaco.scale = 2;

  foguete = createSprite(230, 300);
  foguete.addImage("voando", fogueteImg);
  foguete.scale = 0.2;

  grupoDeStar = new Group();
  grupoDeUfo = new Group();
}

function draw() {
  drawSprites();
  fill("white");
  text("Pontuação: " + pontuacao, 300, 50);

  espaco.velocityY = 3;
  if (espaco.y > 400) {
    espaco.y = 200;
  }
  if (grupoDeStar.isTouching(foguete)) {
    pontuacao = pontuacao + 50;
    grupoDeStar.destroyEach();
  }
  

  if (grupoDeUfo.isTouching(foguete)) {
    grupoDeStar.destroyEach();
    grupoDeUfo.destroyEach();
    pontuacao = pontuacao - 25;
  }
    
  
  gerarObstaculos();

 if (keyIsDown(39)){
   foguete.velocityX = 3;
 }
 if (keyIsDown(37)){
   foguete.velocityX = -3;
 }
    
  
}
  

  


function gerarObstaculos() {
  if (frameCount % 300 == 0) {
    star = createSprite(200, -50, 20, 20);
    star.addImage("star", starImg);
    star.scale = 0.3;
    star.x = Math.round(random(100, 400));
    star.velocityY = 3;
    star.scale = 0.2;
    star.lifetime = 600;
    grupoDeStar.add(star);
  }
  if (frameCount % 400 == 0) {
    ufo = createSprite(200, -50, 20, 20);
    ufo.addImage("ufo", ufoImg);
    ufo.scale = 0.3;
    ufo.x = Math.round(random(100, 400));
    ufo.velocityY = 3;
    ufo.scale = 0.3;
    ufo.lifetime = 600;
    grupoDeUfo.add(ufo);
  }
}
