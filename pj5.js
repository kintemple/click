let bimg;
let img1;
let img2;
let img3;
let img4;
let img5;
let showImage = false;

function preload() {
  bimg = loadImage("assets_pg5/img_4499.jpg");
  img1 = loadImage("assets_pg5/Scan1.png");
  img2 = loadImage("assets_pg5/Scan2.png");
  img3 = loadImage("assets_pg5/Scan3.png");
  img4 = loadImage("assets_pg5/Scan4.png");
  img5 = loadImage("assets_pg5/Scan5.png");
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
    image(img4, width/4, height/2.5);
    image(img5, width/1.5, height/20);
  }
}

function mousePressed() {
  showImage = true;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
