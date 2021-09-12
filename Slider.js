class Slider {
    constructor(x, y, max, bg, accent, start=0, steps=1, width=max) {
        this.x = x;
        this.y = y;
        this.max = max;
        this.bg = bg;
        this.accent = accent
        this.value = start;
        this.steps = steps;
        this.width = width
    }

    draw() {
        fill(this.bg.toString());
        rect(this.x, this.y, this.width)
    }
}