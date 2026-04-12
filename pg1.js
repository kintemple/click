let bimg;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let showImage = false;


function preload(){
  bimg = loadImage('/assets/IMG_4466.JPG');
  img1 = loadImage('/assets/Scan 6.png');
  img2 = loadImage('/assets/Scan 6.1.png');
  img3 = loadImage('/assets/Scan 6.2.png');
  img4 = loadImage('/assets/Scan 6.3.png');
  img5 = loadImage('/assets/Scan 6.4.png');
  img6 = loadImage('/assets/Scan 6.5.png');
  img7 = loadImage('/assets/Scan 6.6.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
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

  
  //textAlign(CENTER);
  //textSize(16);
  //text(`x: ${mouseX} y: ${mouseY}`, 50, 50);
  
  if (showImage) {
    image(img1, 50, 50);
    image(img2, 250, 400);
    image(img3, 330, 150);
    image(img4, 40, 300);
    image(img5, 200, 40);
    image(img6, 200, 300);
    image(img7, 400, 270);
  }
}

function mousePressed() {
  showImage = true;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}