var font;
var vehicles = [];

function preload() {
  font = loadFont('Recipekorea.otf');
}

function setup() {
  createCanvas(800, 300);
  background(0, 0, 20);
  /*
  textSize(192);
  textFont(font);
  fill(255);
  noStroke();
  text("로나", 200, 200);
  */

  var points = font.textToPoints('서민지', 100, 200, 192);
  console.log(points);

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }

}

function draw() {
  background(0, 0, 20);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }

}