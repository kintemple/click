let bimg;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let showImage = false;

function preload(){
  bimg = loadImage('/assets_pg3/IMG_4487.JPG');
  img1 = loadImage('/assets_pg3/Scan 6.1.png');
  img2 = loadImage('/assets_pg3/Scan 6.2.png');
  img3 = loadImage('/assets_pg3/Scan 6.3.png');
  img4 = loadImage('/assets_pg3/Scan 6.4.png');
  img5 = loadImage('/assets_pg3/Scan 6.5.png');
  img6 = loadImage('/assets_pg3/Scan 6.6.png');
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
    image(img1, 450, 100);
    image(img2, 750, 450);
    image(img3, 780, 200);
    image(img4, 460, 350);
    image(img5, 610, 300);
    image(img6, 650, 100);
  }
}

function mousePressed() {
  showImage = true;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}