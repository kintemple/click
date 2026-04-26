let bimg;
let img1;
let img2;
let img3;
let showImage = false;
let sound;

function preload() {
  bimg = loadImage("assets_pg12/img_4540.jpg");
  img1 = loadImage("assets_pg12/Scan1.png");
  img2 = loadImage("assets_pg12/Scan2.png");
  img3 = loadImage("assets_pg12/Scan3.png");
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
    image(img1, width/12, height/3);
    image(img2, width/1.5, height/3.5);
    image(img3, width/3, height/3.5);
    }
}

function mousePressed() {
  showImage = true;

  let d = dist(mouseX, mouseY, width/4.5, height/2);
  if(d <= 125){
    window.open('pg3.html', '_self');
  }

  let d2 = dist(mouseX, mouseY, width/2, height/2);
  if(d2 <= 80){
    window.open('pg8.html', '_self');
  }

  let d3 = dist(mouseX, mouseY, width/1.2, height/2);
  if(d3 <= 80){
    window.open('pg2.html', '_self');
  }

  sound.play();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
