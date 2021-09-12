class Slider {
    constructor(x, y, max, bg, accent, start=0, sHeight=20, sliderSize=sHeight+10) {
        this.x = x;
        this.y = y;
        this.max = max;
        this.bg = bg;
        this.accent = accent
        this.value = Math.round(start);
        this.width = this.max;
        this.height = sHeight;
        this.sliderSize = sliderSize;
        this.offset = this.y - ((this.sliderSize - this.height) / 2)
    }

    draw() {

        noStroke();
        fill(this.bg.toString());
        rect(this.x, this.y, this.width, this.height);
        
        fill(this.accent.toString());
        rect(this.x + this.value, this.y - ((this.sliderSize - this.height) / 2), this.sliderSize);

        let response = 0;

        if (mouseX >= this.x + this.value - response && mouseX <= this.x + this.value + this.sliderSize + response && 
            mouseY >= this.offset && mouseY <= this.offset + this.sliderSize && 
            mouseIsPressed && this.value <= 255 && this.value >= 0) {
                let moved = mouseX - pmouseX;
                this.value+=moved;
                response = this.width
        }

        if (this.value < 0) {
            this.value = 0
        }

        if (this.value > this.max) {
            this.value = this.max
        }
    }
}