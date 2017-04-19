// Sherry Yang
// Triangle Strip
var table;  
var x;
var y;
var lastAngle = 0;
var outsideRadius = 150;
var insideRadius = 100;
var angles = [30, 10, 45, 35, 60, 38, 75, 67];

function preload() {
  table = loadTable("tryB.csv","csv", "header");
}

function setup() {
     //size(640, 360);
    createCanvas(
    window.innerWidth,
    window.innerHeight
    );
     background(255, 230, 204);
     x = width/2;
     y = height/2;
     //noLoop();// draw only once 
}

function draw(){
    background(255, 230, 204);

    ellipseMode(RADIUS);  // Set ellipseMode to RADIUS
    //fill(255);  // Set fill to white
    pieChart(300,angles,lastAngle);  // Draw white ellipse using RADIUS mode
    lastAngle+=0.01;
    ellipseMode(CENTER);  // Set ellipseMode to CENTER
    fill(255, 230, 204);  // Set fill to gray
    ellipse(x, y, 200, 200);  // Draw gray ellipse using CENTER mode
  //beginShape(TRIANGLE_STRIP); //very important function
   
  //endShape();
}

function pieChart(diameter, data,last) {
  for (var i = 0; i < data.length; i++) {
    var gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(x, y, diameter+data[i], diameter+data[i], last, last+radians(data[i]),PIE);
    last += radians(data[i]);
  }
}