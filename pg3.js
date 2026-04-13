let bimg;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let showImage = false;

function preload(){
  bimg = loadImage('IMG_4487.JPG');
  img1 = loadImage('Scan 6.1.png');
  img2 = loadImage('Scan 6.2.png');
  img3 = loadImage('Scan 6.3.png');
  img4 = loadImage('Scan 6.4.png');
  img5 = loadImage('Scan 6.5.png');
  img6 = loadImage('Scan 6.6.png');
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
    image(img1, 50, 50);
    image(img2, 250, 410);
    image(img3, 330, 150);
    image(img4, 40, 300);
    image(img5, 170, 250);
    image(img6, 200, 40);
  }
}

function mousePressed() {
  showImage = true;
}