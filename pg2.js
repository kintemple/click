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
let sound;

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
  sound = loadSound("assets_pg2/click.m4a");
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

  //textAlign(CENTER);
  //textSize(16);
  //text(`x: ${mouseX} y: ${mouseY}`, 50, 50);
  
  if (showImage) {
    //floss
    image(img1, width/12, height/10);
    //toothpste
    image(img2, width/2, height/2.5);
    //retainer
    image(img3, width/3, height/10);
    //mouthwash
    image(img4, width/20, height/3);
    //serum
    image(img5, width/1.5, height/20);
    //solution
    image(img6, width/1.5, height/1.9, 300, 500);
    //case
    image(img7, width/2.5, height/1.5);
    //scissors
    image(img8, width/3, height/2)
  }
}

function mousePressed() {
  showImage = true;

  let d = dist(mouseX, mouseY, width/4.5, height/3.5);
  if(d <= 80){
    window.open("pg6.html", "_self")
  }

  let d2 = dist(mouseX, mouseY, width/2, height/3);
  if(d2<=80){
    window.open("index.html", "_self")
  }

  let d3 = dist(mouseX, mouseY, width/4.6, height/1.15);
  if(d3<=90){
    window.open("pg7.html", "_self")
  }

  let d4 = dist(mouseX, mouseY, width/2, height/1.5);
  if(d4<=90){
    window.open("pg9.html", "_self")
  }

  let d5 = dist(mouseX, mouseY, width/1.8, height/1.15);
  if(d5<=80){
    window.open("pg11.html", "_self")
  }

  let d6 = dist(mouseX, mouseY, width/1.75, height/1.8);
  if(d6<=80){
    window.open("pg4.html", "_self")
  }

  let d7 = dist(mouseX, mouseY, width/1.2, height/1.2);
  if(d7<=90){
    window.open("pg8.html", "_self")
  }

  sound.play();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);


}