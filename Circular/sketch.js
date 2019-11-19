let loading = true

function loopLoaded() {
  loading = false
  background(color('black'))
  fill(550, 1000, 1000)
  textAlign(CENTER)
  text('click to start', width / 2, height / 2)
}

let arp, amplitude, level
let bauhaus
let fft, spectrum

function setup() {
  createCanvas(windowWidth, windowHeight)
  arp = loadSound('moogArp4Circular2.wav', loopLoaded)

  bauhaus = loadFont('BauhausStd-Medium.otf')
  textFont(bauhaus)
  textSize(35)

  background(color('black'))
  colorMode(HSB, 1000)

  // amplitude = new p5.Amplitude();
  fft = new p5.FFT()
}

function draw() {
  if (loading) {
    loadingPage()
  } else {
    circular()
  }
}

function mousePressed() {
  background(0)
  textAlign(RIGHT)
  text('click to refresh', width, height)
  if (arp.isPlaying() == false) {
    arp.loop()
  }
}
