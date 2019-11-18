function preload() {
  beat = loadSound('111 - 111.wav')
  bCircle = loadImage('blueCircle.png')
  pCircle = loadImage('pinkCircle.png')
}

let myDiv

function setup() {
  createCanvas(613, 766)
  select('body').style('background-color', 'black')
  myDiv = select('.innerDiv')
  myDiv.html('click to start')

  fft = new p5.FFT()

  colorMode(HSB, 1000)
  imageMode(CENTER)
  angleMode(DEGREES)
  // print(beat.sampleRate());
  hx = 0
  hx2 = width
  hy = 0

  print(beat.duration())
}

function mouseClicked() {
  beat.loop()
  myDiv.remove()
}

let bCirlce, pCircle

let beat
let fft, spectrum, highE, hControl, midE, mControl
let hx, hy

let hh = 550
let hs = 0

let a = 0
let mx, my
let mh = 430

let cradius = 0

function draw() {
  background(color('black'))

  spectrum = fft.analyze()

  push()
  translate(width / 2, height / 2)
  noStroke()
  rotate(-a * 10)
  fill(color('purple'))
  ellipse(250, 0, 30)
  rotate(-a / 4)
  fill(color('hotpink'))
  ellipse(270, 0, 20)
  rotate(-a / 4)
  fill(color('red'))
  ellipse(290, 0, 10)
  pop()

  push()
  translate(width / 2, 0)
  for (let i = 1; i < 361; i++) {
    mx = cradius * cos(i)
    my = cradius * sin(i)
    strokeWeight(1.4)
    stroke(mh + i, 1000, 1000)
    line(0, 0, mx, my)
  }
  pop()

  midE = fft.getEnergy(340, 360)
  mControl = map(midE, 150, 230, 0, 1)
  if (mControl > 0.85) {
    cradius = 700
  } else {
    cradius = 0
  }

  push()
  translate(width / 2, height / 2)
  rotate(-a / 15)
  image(pCircle, 0, 0, 345 * 0.8, 345 * 0.8)
  // image(pCircle,0, 0)
  pop()

  push()
  translate(width / 2, height / 2)
  rotate(a)
  image(bCircle, 0, 0, 425 * 0.9, 425 * 0.9)
  // image(bCircle,0, 0);
  pop()

  a += 0.4
  // stroke(color('black'));
  // line(width-1, 0, width-1, height);

  highE = fft.getEnergy(14500, 15500)
  hControl = map(highE, 0, 100, 0, 1)
  // print(hControl);
  // print(beat.sampleRate() / spectrum.length);

  hx += 5
  if (hx > width) {
    hx = 0
  }

  hx2 -= 5
  if (hx2 < 0) {
    hx2 = width
  }

  hh += 1
  if (hh > 800) {
    hh = 550
  }

  if (hControl > 0.9) {
    hy = 0
    hs = 1000
  } else {
    hy = height
    hs = 0
  }

  for (let i = 0; i < 30; i++) {
    strokeWeight(2)
    stroke(hh + i * 7, hs, 1000)
    line(width, height, hx + i * 13, hy)
  }

  for (let i = 0; i < 30; i++) {
    strokeWeight(2)
    stroke(hh + i * 7, hs, 1000)
    line(0, height, hx2 - i * 13, hy)
  }

  // print(beat.currentTime());
  if (beat.currentTime() < 0.03) {
    background(color('hotpink'))
  }
}
