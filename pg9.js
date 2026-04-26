let bimg;
let img1;
let img2;
let img3;
let showImage = false;

function preload() {
  bimg = loadImage("assets_pg9/img_4527.jpg");
  img1 = loadImage("assets_pg9/Scan1.png");
  img2 = loadImage("assets_pg9/Scan2.png");
  img3 = loadImage("assets_pg9/Scan3.png");
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
    image(img3, width/3, height/3.5);
    }
}

function mousePressed() {
  showImage = true;

  let d = dist(mouseX, mouseY, width/4.5, height/4);
  if(d <= 80){
    window.open('pg10.html', '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
