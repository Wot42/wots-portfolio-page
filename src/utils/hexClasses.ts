export class Hex {
  x: number;
  y: number;
  size: number;
  targetSize: number;
  colour: string; // CHECK COLOUR TYPE

  constructor(x: number, y: number, size: number, colour: string) {
    this.x = x;
    this.y = y;
    this.size = size; // the current hex size
    this.targetSize = 0; // the size the hex is growing or shrinking towards.
    this.colour = colour;
  }

  draw() {
    // draws to ctxH
    ctxH.beginPath();
    ctxH.moveTo(this.x - this.size, this.y);
    ctxH.lineTo(this.x - this.size / 2, this.y + (this.size * rootThree) / 2);
    ctxH.lineTo(this.x + this.size / 2, this.y + (this.size * rootThree) / 2);
    ctxH.lineTo(this.x + this.size, this.y);
    ctxH.lineTo(this.x + this.size / 2, this.y - (this.size * rootThree) / 2);
    ctxH.lineTo(this.x - this.size / 2, this.y - (this.size * rootThree) / 2);
    ctxH.closePath();
    ctxH.fillStyle = this.colour;
    ctxH.fill();
  }

  drawBG() {
    // draws to ctxB
    ctxB.beginPath();
    ctxB.moveTo(this.x - this.size, this.y);
    ctxB.lineTo(this.x - this.size / 2, this.y + (this.size * rootThree) / 2);
    ctxB.lineTo(this.x + this.size / 2, this.y + (this.size * rootThree) / 2);
    ctxB.lineTo(this.x + this.size, this.y);
    ctxB.lineTo(this.x + this.size / 2, this.y - (this.size * rootThree) / 2);
    ctxB.lineTo(this.x - this.size / 2, this.y - (this.size * rootThree) / 2);
    ctxB.closePath();
    ctxB.fillStyle = this.colour;
    ctxB.fill();
  }

  update() {
    // sets target size and grows or shrinks to meet it.
    let radius = Math.sqrt(
      (mouse.x - this.x) * (mouse.x - this.x) +
        (mouse.y - this.y) * (mouse.y - this.y)
    );

    if (radius < maxMouseRadius) {
      this.targetSize = maxSize - 1;
    } else if (radius < minMouseRadius) {
      this.targetSize =
        minSize +
        (maxSize - minSize) *
          (1 - (radius - maxMouseRadius) / (minMouseRadius - maxMouseRadius));
    } else {
      this.targetSize = minSize;
    }

    if (
      this.size < this.targetSize &&
      this.size + growSpeed < this.targetSize
    ) {
      this.size += growSpeed;
    } else if (
      this.size > this.targetSize &&
      this.size - shrinkSpeed > this.targetSize
    ) {
      this.size -= shrinkSpeed;
    } else {
      this.size = this.targetSize;
    }

    this.draw();
  }
}

export class Explode {
  x: number;
  y: number;
  size: number;
  innerSize: number;
  done: boolean;
  speed: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = maxMouseRadius; // outer radius
    this.innerSize = 0; // inner radius
    this.done = false; // used to clear off screen explosions
    this.speed = explodeSpeed;
  }

  draw() {
    // draws to ctxS
    let gradEx = ctxS.createRadialGradient(
      this.x,
      this.y,
      this.innerSize,
      this.x,
      this.y,
      this.size
    );
    gradEx.addColorStop(0, "rgba(0, 0, 0, 0)");
    gradEx.addColorStop(0.2, spotLightColour);
    gradEx.addColorStop(0.7, spotDeepColour);
    gradEx.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctxS.fillStyle = gradEx;
    ctxS.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  update() {
    // grows the explosion
    this.size += explodeSpeed;
    this.innerSize += explodeSpeed;
    if (this.innerSize > screenDiagonal) this.done = true;
    this.draw();
  }
}
