let loading = true

function loopLoaded() {
  loading = false
  background(0)
  fill(color('hotpink'))
  textFont(bauhaus)
  textAlign(CENTER)
  textSize(30)
  text('click to start', width / 2, height / 2)
}

let audio, path1, bauhaus

function setup() {
  createCanvas(windowWidth, windowHeight)
  bauhaus = loadFont('BauhausStd-Medium.otf')
  audio = loadSound('SunPath.wav', loopLoaded)
  path1 = new Chaser()

  background(0)
  frameRate(60)

  fft = new p5.FFT()
}

function draw() {
  if (loading) {
    loadingPage()
  } else {
    path()
  }
}

function mousePressed() {
  background(0)
  if (audio.isPlaying() == false) {
    audio.loop()
  }
}
