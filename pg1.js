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
  bimg = loadImage('');
  img1 = loadImage('assets_pg1/Scan1.png');
  img2 = loadImage('assets_pg1/Scan2.png');
  img3 = loadImage('assets_pg1/Scan3.png');
  img4 = loadImage('assets_pg1/Scan4.png');
  img5 = loadImage('assets_pg1/Scan5.png');
  img6 = loadImage('assets_pg1/Scan6.png');
  img7 = loadImage('assets_pg1/Scan7.png');
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
    image(img1, 550, 100);
    image(img2, 750, 450);
    image(img3, 830, 200);
    image(img4, 540, 310);
    image(img5, 700, 100);
    image(img6, 700, 350);
    image(img7, 900, 320);
  }
}

function mousePressed() {
  showImage = true;

  let d = dist(mouseX, mouseY, 650, 200);
  if(d<40){
    window.open('pg2.html', '_self');
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}