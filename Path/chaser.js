class Chaser {
  constructor() {
    this.loc = createVector(width * 3 / 5, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

		this.x = 0;
		this.y = 0;
		this.theta = 0;
    this.r = 0;
  }

  setTarget() {
    this.r += 0.02;
    let originX = width / 2;
    let originY = height / 2;
    this.x = originX + this.r * cos(this.theta);
    this.y = originY + this.r * sin(this.theta);
    this.theta += 0.005;
  }

  move() {
    let targetForce = createVector(this.x, this.y);
    // let targetForce = createVector(width / 4, height / 3);
    // let targetForce = createVector(mouseX, mouseY);
		targetForce.sub(this.loc);
		targetForce.setMag(0.015);

    this.acc = targetForce;
    this.vel.add(this.acc);
		this.loc.add(this.vel);

		this.vel.limit(1.7);
  }

	displayTarget() {
		// fill(255, 0, 0, 100);
    fill(color('hotpink'));
		ellipse(this.x, this.y, 0.2)
	}

  displayPath() {
		noStroke();
    // fill(255, 255, 255, 50);
    fill(color('hotpink'));
    ellipse(this.loc.x, this.loc.y, 3);
  }
}
