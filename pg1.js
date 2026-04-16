let ratio;
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
  bimg = loadImage('assets_pg1/img_4466.jpg');
  img1 = loadImage('assets_pg1/Scan1.png');
  img2 = loadImage('assets_pg1/Scan2.png');
  img3 = loadImage('assets_pg1/Scan3.png');
  img4 = loadImage('assets_pg1/Scan4.png');
  img5 = loadImage('assets_pg1/Scan5.png');
  img6 = loadImage('assets_pg1/Scan6.png');
  img7 = loadImage('assets_pg1/Scan7.png');
}

function setup() {
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  createCanvas(design_w * ratio, design_h * ratio);
}

function draw(){  


  image(bimg, 0 * ratio, 0 * ratio, bimg.width * ratio, bimg.height * ratio);

  //textAlign(CENTER);
  //textSize(16);
  //text(`x: ${mouseX} y: ${mouseY}`, 50, 50);
  
  if (showImage) {
    image(img1, 550 * ratio, 100 * ratio, img1.width * ratio, img1.height * ratio);
    image(img2.width * ratio, img2.height * ratio, 750 * ratio, 450 * ratio);
    image(img3, 830 * ratio, 200 * ratio);
    image(img4, 540 * ratio, 310 * ratio);
    image(img5, 700 * ratio, 100 * ratio);
    image(img6, 700 * ratio, 350 * ratio);
    image(img7, 900 * ratio, 320 * ratio);
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
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  resizeCanvas(design_w * ratio, design_h * ratio);
}