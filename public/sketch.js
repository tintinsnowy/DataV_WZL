var streams = [];
var fadeInterval = 0.6;
var symbolSize = 18;
var table1;
var table2;
var len_table1;
var Step =2;
var circle_x;
var circle_y;
var outsideRadius = 150;
var insideRadius = 100;
var angles = [43,55,44,0]; /* the data to pie chart: 43(Q), 55(schmidt),44() */
var rgb=[255, 230, 204, 217, 255, 204, 204, 230, 255, 255, 102, 102,153, 255, 255,242, 242, 166,153, 204, 255];
var reviewB = [[5,50],[10,70],[15,75],[70,20],[80,5]];
var reviewUp = [["schlecht"],["great"]];
var reviewRate = 4;
var bar;
var img2;
function preload() {
  //table1 = loadTable("try.csv","csv", "header");
  table1 = loadJSON("rain.json");
  img2 = loadImage("Bild4.png");
}

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  /* start to process the json file*/
  //print(table1.length);
  rainData();
  /* end of the rainfall part*/
    
  /* start of the pie part*/
  circle_x = window.innerWidth/2;
  circle_y = window.innerHeight/2;
  piePre();
  /* end of the pie part*/
  
 /* start of the bar part*/
  bar = new Fibar();
  bar.generateCircle();	
 /* end of the bar part*/
}

function draw() {
    // the first screen
    if (Step == 1){
        drawRainFall();
        var strs = streams[streams.length-1];
        var last = strs.symbols;
        if(last[last.length-1].y > window.innerWidth)
            Step =2;
    }
    else if(Step == 2){
        drawPie();
    }
	else if(Step == 3){
		drawBar(bar);
	}
}
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}