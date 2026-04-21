let ratio;
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
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);

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

  textAlign(CENTER);
  textSize(16);
  text(`x: ${mouseX} y: ${mouseY}`, 50, 50);
  
  if (showImage) {
    // image(img1, 550 * ratio, 150 * ratio);
    //floss
    image(img1, width/3, height/8);
    // image(img2, 750 * ratio, 510 * ratio);
    image(img2, width/2.5, height/5);
    // image(img3, 830 * ratio, 250 * ratio);
    //retainer container
    image(img3, width/1.5, height/6);
    image(img4, 540 * ratio, 400 * ratio);
    image(img5, 700 * ratio, 140 * ratio);
    image(img6, 670 * ratio, 400 * ratio);
    image(img7, 600 * ratio, 300 * ratio);
    image(img8, 570 * ratio, 115 * ratio);
  }
}

function mousePressed() {
  showImage = true;

  let d = dist(mouseX, mouseY, width/2, height/2);
  if(d <= 100){
    window.open('pg3.html', '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);


}