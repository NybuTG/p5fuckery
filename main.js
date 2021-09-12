let game;
let home;

function preload() {

}

function setup() {
    game = createCanvas(windowWidth, windowHeight);
    home = new Home();

}

function draw() {
    home.draw()
}