let bimg;
let img1;
let showImage = false;
let sound;

function preload() {
  bimg = loadImage("assets_pg10/img_4531.jpg");
  img1 = loadImage("assets_pg10/Scan1.png");
  sound = loadSound("assets_pg7/click.m4a");
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
    image(img1, width/2.5, height/10);
    }
}

function mousePressed() {
  showImage = true;

  let d = dist(mouseX, mouseY, width/2, height/2);
  if(d <= 100){
    window.open('pg11.html', '_self');
  }
  sound.play();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
