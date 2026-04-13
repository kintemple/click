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
  bimg = loadImage('/assets_pg1/IMG_4466.JPG');
  img1 = loadImage('/assets_pg1/Scan 6.png');
  img2 = loadImage('/assets_pg1/Scan 6.1.png');
  img3 = loadImage('/assets_pg1/Scan 6.2.png');
  img4 = loadImage('/assets_pg1/Scan 6.3.png');
  img5 = loadImage('/assets_pg1/Scan 6.4.png');
  img6 = loadImage('/assets_pg1/Scan 6.5.png');
  img7 = loadImage('/assets_pg1/Scan 6.6.png');
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
    image(img1, 350, 100);
    image(img2, 550, 450);
    image(img3, 630, 200);
    image(img4, 340, 310);
    image(img5, 500, 100);
    image(img6, 500, 350);
    image(img7, 700, 320);
  }
}

function mousePressed() {
  showImage = true;

  let d = dist(mouseX, mouseY, 450, 200);
  if(d<40){
    window.open('pg2.html', '_self');
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}