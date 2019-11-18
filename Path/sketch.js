let loading = true

function loopLoaded() {
  loading = false
  background(0)
  fill(color('hotpink'))
  textFont(bauhaus)
  textAlign(CENTER)
  textSize(30)
  text('click to start', width / 2, height / 2)
  audio.loop()
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

  userStartAudio().then(() => {
    background(0)
  })
}

function draw() {
  if (loading) {
    loadingPage()
  } else {
    path()
  }
}

function keyPressed() {
  if (keyCode === 82) {
    background(0)
  }
}
