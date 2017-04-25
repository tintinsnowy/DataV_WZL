// Sherry Yang
// Triangle Strip
var table;  
var table2;
var x;
var y;
var lastAngle = 0;
var outsideRadius = 150;
var insideRadius = 100;
var angles = [30, 10, 45, 35, 60, 113, 67];
var rgb=[204, 255, 255,255, 150, 153,255, 204, 204,255, 204, 217,153, 255, 255,242, 242, 166,153, 204, 255];
function preload() {
  table = loadTable("tryB.csv","csv", "header");
  table2 = loadTable("try.csv","csv", "header");
}

function setup() {
    //size(640, 360);
    createCanvas(window.innerWidth, window.innerHeight);
    background(255, 255, 240);
    x = width/2;
    y = height/2;
    //noLoop();// draw only once 
}

function draw(){
    background(255, 255, 240);

    ellipseMode(RADIUS);  // Set ellipseMode to RADIUS
    //fill(255);  // Set fill to white
    pieChart(300,angles,lastAngle);  // Draw white ellipse using RADIUS mode
    lastAngle+=(mouseX-x)/10000;
    ellipseMode(CENTER);  // Set ellipseMode to CENTER
    fill(255, 255, 240);  // Set fill to gray
    ellipse(x, y, 200, 200);  // Draw gray ellipse using CENTER mode
    //beginShape(TRIANGLE_STRIP); //very important function   
    //endShape();
}

function pieChart(diameter, data,last) {
  for (var i = 0; i < data.length; i++) {
    fill(rgb[i*3],rgb[i*3+1],rgb[i*3+2]);
    noStroke();
    if(i==3) scale(1.5);
    if(i==4) scale(1/1.5);
    arc(x, y, diameter+data[i], diameter+data[i], last, last+radians(data[i]),PIE);
    last += radians(data[i]);
  }
}