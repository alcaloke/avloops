let fft, spectrum, energy

let chaser1
let division = 100
let ds = 0.15
let x, y
let r = 1000
let a = 0
let b = 0

let h = 10
let hspeed = 0.15

function path() {
  // background(0);
  spectrum = fft.analyze()
  energy = fft.getEnergy('mid')
  // print(energy) // 40 to 110

  path1.setTarget()
  path1.move()
  // path1.displayPath();
  path1.displayTarget()

  // division += ds;
  // if (division > 500 || division < 100) {
  //   ds *= -1;
  // }
  division = map(energy, 50, 110, 100, 250)

  for (let i = 1; i < division + 1; i++) {
    x = width / 2 + r * cos(a * i + b)
    y = height / 2 + r * sin(a * i + b)
    colorMode(HSB, 1000)
    stroke(h, 1000, 1000)
    strokeWeight(0.006)
    line(x, y, path1.loc.x, path1.loc.y)
    // line(x, y, mouseX, mouseY);
  }

  a = TWO_PI / division
  b += 0.005

  // h += hspeed;
  // if (h > 150 || h < 10) {
  // 	hspeed *= -1;
  // }
  h = map(energy, 50, 110, 550, 900)
}
