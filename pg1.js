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
  const design_w = windowWidth;
  const design_h = windowHeight;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  createCanvas(design_w * ratio, design_h * ratio);
}

function draw() {
  image(bimg, 0 * ratio, 0 * ratio, bimg.width * ratio, bimg.height * ratio);

  //textAlign(CENTER);
  //textSize(16);
  //text(`x: ${mouseX} y: ${mouseY}`, 50, 50);

  if (showImage) {
    image(
      img1,
      200 * ratio,
      100 * ratio,
      img1.width * ratio,
      img1.height * ratio,
    );
    image(img2, 500, 450);
    image(img3, 600, 400);
    image(img4, 200, 400);
    image(img5, 900, 50);
    image(img6,600, 350);
    image(img7, 900, 470);
  }
}

function mousePressed() {
  showImage = true;

  let d = dist(mouseX, mouseY, 200, 100);
  if (d<40) {
    window.open("pg2.html", "_self");
  }
}

function windowResized() {
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  resizeCanvas(design_w * ratio, design_h * ratio);
}
