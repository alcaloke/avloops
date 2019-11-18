function preload() {
  arp = loadSound("moogArp4Circular2.wav");
}

let arp, amplitude, level;
let fft, spectrum;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 1000);
  background(color("black"));

  fill(550, 1000, 1000);
  textAlign(CENTER);
  textSize(14);
  text("click to start audio", width / 2, height / 2);
  // amplitude = new p5.Amplitude();
  fft = new p5.FFT();
}

let d = 25;
let a;
let r = 250;

let r_e = 0;
let r_eSpeed = 0.1;
let ex, ey;

let theta = 0;
let thetaVel = 0;
let thetaAcc;

let h = 450;
let hspeed = 1;

let rot = 0;
let er;

let sWeight;

function draw() {
  // level = amplitude.getLevel();
  spectrum = fft.analyze();
  level = fft.getEnergy("mid");
  level = map(level, 0, 255, 0, 1);

  print(level);
  d = map(level, 0, 1, 0, 360 / 5);
  er = map(level, 0, 0.5, 0.1, 5);
  sWeight = map(level, 0, 0.5, 0.005, 0.02);

  a = TWO_PI / d;

  push();
  translate(width / 2, height / 2);

  rotate(rot);

  noStroke();
  fill(h, 1000, 1000);
  ex = r_e * cos(theta);
  ey = r_e * sin(theta);
  ellipse(ex, ey, er);

  for (let i = 1; i < d + 1; i++) {
    stroke(h, 1000, 1000);
    strokeWeight(sWeight);
    let x = r * cos(i * a);
    let y = r * sin(i * a);
    line(ex, ey, x, y);
  }
  pop();

  // rot += 0.01;

  r_e += r_eSpeed;
  if (r_e > r || r_e < 0) {
    r_eSpeed *= -1;
  }

  if (r_e < 0) {
    thetaVel *= -1;
  }

  // thetaAcc = PI / 360;
  thetaAcc = map(r_e, 0, r, 0, 0.001);
  thetaVel += thetaAcc;
  theta += thetaVel;

  thetaVel = constrain(thetaVel, 0, 0.001);

  h += hspeed;
  if (h > 650 || h < 450) {
    hspeed *= -1;
  }
}

function mousePressed() {
  // let fs = fullscreen();
  // if (!fs) {
  //   fullscreen(true);
  // }
  background(0);
  if (arp.isPlaying() == false) {
    arp.loop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(color("black"));
}
