let bimg;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let showImage = false;
let sound;

function preload() {
  bimg = loadImage("assets_pg8/img_4518.jpg");
  img1 = loadImage("assets_pg8/Scan1.png");
  img2 = loadImage("assets_pg8/Scan2.png");
  img3 = loadImage("assets_pg8/Scan3.png");
  img4 = loadImage("assets_pg8/Scan4.png");
  img5 = loadImage("assets_pg8/Scan5.png");
  img6 = loadImage("assets_pg8/Scan6.png");
  img7 = loadImage("assets_pg8/Scan7.png");
  sound = loadSound("assets_pg7/click.m4a");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let imgRatio = bimg.width / bimg.height;
  let canvasRatio = width / height;
  let drawW, drawH, drawX, drawY;

  if (canvasRatio > imgRatio) {
    drawW = width;
    drawH = width / imgRatio;
  } else {
    drawH = height;
    drawW = height * imgRatio;
  }

  drawX = (width - drawW) / 2;
  drawY = (height - drawH) / 2;

  image(bimg, drawX, drawY, drawW, drawH);

  if (showImage) {
    image(img1, width/12, height/10);
    image(img2, width/2, height/2.5);
    image(img3, width/3, height/10);
    image(img4, width/5, height/2.3);
    image(img5, width/1.5, height/20);
    image(img6, width/1.4, height/1.8);
  }
}

function mousePressed() {
  showImage = true;

  let d = dist(mouseX, mouseY, width/4.5, height/2.5);
  if(d <= 80){
    window.open('pg4.html', '_self');
  }

  let d2 = dist(mouseX, mouseY, width/2, height/2);
  if(d2 <= 80){
    window.open("pg7.html", "_self");
  }

  let d3 = dist(mouseX, mouseY, width/3, height/1.5);
  if(d3 <= 90){
    window.open("pg10.html", "_self");
  }

  let d4 = dist(mouseX, mouseY, width/1.7, height/1.5);
  if(d4 <= 80){
    window.open("index.html", "_self");
  }

  let d5 = dist(mouseX, mouseY, width/1.2, height/3);
  if(d5 <= 80){
    window.open("pg12.html", "_self");
  }

  let d6 = dist(mouseX, mouseY, width/1.2, height/1.2);
  if(d6 <= 80){
    window.open("pg3.html", "_self");
  }
  sound.play();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
