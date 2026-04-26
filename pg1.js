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


function preload() {
  bimg = loadImage("assets_pg1/img_4466.jpg");
  img1 = loadImage("assets_pg1/Scan1.png");
  img2 = loadImage("assets_pg1/Scan2.png");
  img3 = loadImage("assets_pg1/Scan3.png");
  img4 = loadImage("assets_pg1/Scan4.png");
  img5 = loadImage("assets_pg1/Scan5.png");
  img6 = loadImage("assets_pg1/Scan6.png");
  img7 = loadImage("assets_pg1/Scan7.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, 
  windowHeight / design_h);

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
    //vanicream
    image(img1, width/12, height/10);
    //dryshampoo
    image(img2, width/2, height/2.5);
    //bottle
    image(img3, width/3, height/10);
    //deodorant
    image(img4, width/20, height/2);
    //odele
    image(img5, width/1.5, height/14);
    //brush
    image(img6, width/3, height/1.5);
    //pouch
    image(img7, width/1.4, height/1.9);
  }
}

function mousePressed() {
  showImage = true;

  let d = dist(mouseX, mouseY, width/4.5, height/3);
  if (d<=80) {
    window.open("pg10.html", "_self");
  }

  let d2 = dist(mouseX, mouseY, width/2, height/2);
  if (d2<=80) {
    window.open("pg2.html", "_self")
  }

  let d3 = dist(mouseX, mouseY, width/4.5, height/4);
  if (d3<=80) {
    window.open("pg5.html", "_self")
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
