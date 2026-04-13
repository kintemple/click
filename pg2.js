let bimg;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let showImage = false;

function preload(){
  bimg = loadImage('assets_pg2/img_4475.jpg');
  img1 = loadImage('assets_pg2/Scan1.png');
  img2 = loadImage('assets_pg2/Scan2.png');
  img3 = loadImage('assets_pg2/Scan3.png');
  img4 = loadImage('assets_pg2/Scan4.png');
  img5 = loadImage('assets_pg2/Scan5.png');
  img6 = loadImage('assets_pg2/Scan6.png');
  img7 = loadImage('assets_pg2/Scan7.png');
  img8 = loadImage('assets_pg2/Scan8.png');
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
    image(img1, 550, 150);
    image(img2, 750, 510);
    image(img3, 830, 250);
    image(img4, 540, 400);
    image(img5, 700, 140);
    image(img6, 670, 400);
    image(img7, 600, 300);
    image(img8, 570, 115);
  }
}

function mousePressed() {
  showImage = true;

  let d = dist(mouseX, mouseY, 690, 180);
  if(d<40){
    window.open('pg3.html', '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}