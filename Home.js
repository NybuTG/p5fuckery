class Home {
    constructor() {
        this.shirtColors = [
            new Slider(150, 50, 255, "#1c1c1c", "#ff0000"),
            new Slider(150, 125, 255, "#1c1c1c", "#00ff00"),
            new Slider(150, 200, 255, "#1c1c1c", "#0000ff"),
        ];
    }

    draw() {
        // For blitting screen
        background("white");

        for (let i=0; i < this.shirtColors.length; i++) {
            this.shirtColors[i].draw()
        }
        // Shirt
        fill(this.shirtColors[0].value, this.shirtColors[1].value, this.shirtColors[2].value);
        stroke("black");
        strokeWeight(10);
        rect(10, 10, 100, 150)
        noStroke();


    }
}