const rootThree = Math.sqrt(3); // needed for hexagon calculations

export class Hex {
  x: number;
  y: number;
  size: number;
  targetSize: number;
  colour: string;
  maxSize: number;
  minSize: number;
  shrinkSpeed: number;
  growSpeed: number;
  maxMouseRadius: number;
  minMouseRadius: number;
  mouse: {
    x: number;
    y: number;
  };

  constructor(
    x: number,
    y: number,
    size: number,
    colour: string,
    maxSize: number,
    minSize: number,
    shrinkSpeed: number,
    growSpeed: number,
    maxMouseRadius: number,
    minMouseRadius: number,
    mouse: {
      x: number;
      y: number;
    }
  ) {
    this.x = x;
    this.y = y;
    this.size = size; // the current hex size
    this.targetSize = 0; // the size the hex is growing or shrinking towards.
    this.colour = colour;
    this.maxSize = maxSize;
    this.minSize = minSize;
    this.shrinkSpeed = shrinkSpeed;
    this.growSpeed = growSpeed;
    this.maxMouseRadius = maxMouseRadius;
    this.minMouseRadius = minMouseRadius;
    this.mouse = mouse;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.x - this.size, this.y);
    ctx.lineTo(this.x - this.size / 2, this.y + (this.size * rootThree) / 2);
    ctx.lineTo(this.x + this.size / 2, this.y + (this.size * rootThree) / 2);
    ctx.lineTo(this.x + this.size, this.y);
    ctx.lineTo(this.x + this.size / 2, this.y - (this.size * rootThree) / 2);
    ctx.lineTo(this.x - this.size / 2, this.y - (this.size * rootThree) / 2);
    ctx.closePath();
    ctx.fillStyle = this.colour;
    ctx.fill();
  }

  update(ctx: CanvasRenderingContext2D) {
    // sets target size and grows or shrinks to meet it.
    let radius = Math.sqrt(
      (this.mouse.x - this.x) * (this.mouse.x - this.x) +
        (this.mouse.y - this.y) * (this.mouse.y - this.y)
    );

    if (radius < this.maxMouseRadius) {
      this.targetSize = this.maxSize - 1;
    } else if (radius < this.minMouseRadius) {
      this.targetSize =
        this.minSize +
        (this.maxSize - this.minSize) *
          (1 -
            (radius - this.maxMouseRadius) /
              (this.minMouseRadius - this.maxMouseRadius));
    } else {
      this.targetSize = this.minSize;
    }

    if (
      this.size < this.targetSize &&
      this.size + this.growSpeed < this.targetSize
    ) {
      this.size += this.growSpeed;
    } else if (
      this.size > this.targetSize &&
      this.size - this.shrinkSpeed > this.targetSize
    ) {
      this.size -= this.shrinkSpeed;
    } else {
      this.size = this.targetSize;
    }

    this.draw(ctx);
  }
}

export class Explode {
  x: number;
  y: number;
  size: number;
  innerSize: number;
  done: boolean;
  speed: number;
  screenDiagonal: number;
  spotLightColour: string;
  spotDeepColour: string;

  constructor(
    x: number,
    y: number,
    size: number,
    speed: number,
    spotLightColour: string,
    spotDeepColour: string
  ) {
    this.x = x;
    this.y = y;
    this.size = size; // outer radius
    this.innerSize = 0; // inner radius
    this.done = false; // used to clear off screen explosions
    this.speed = speed;
    this.screenDiagonal = Math.sqrt(
      window.innerWidth * window.innerWidth +
        window.innerHeight * window.innerHeight
    );
    this.spotLightColour = spotLightColour;
    this.spotDeepColour = spotDeepColour;
  }

  draw(ctx: CanvasRenderingContext2D) {
    let gradEx = ctx.createRadialGradient(
      this.x,
      this.y,
      this.innerSize,
      this.x,
      this.y,
      this.size
    );
    gradEx.addColorStop(0, "rgba(0, 0, 0, 0)");
    gradEx.addColorStop(0.2, this.spotLightColour);
    gradEx.addColorStop(0.7, this.spotDeepColour);
    gradEx.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = gradEx;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  update(ctx: CanvasRenderingContext2D) {
    // grows the explosion
    this.size += this.speed;
    this.innerSize += this.speed;
    if (this.innerSize > this.screenDiagonal) this.done = true;
    this.draw(ctx);
  }
}
