var streams = [];
var fadeInterval = 0.6;
var symbolSize = 18;
var table1;
var table2;
var len_table1;
var Step =1;
var circle_x;
var circle_y;
var outsideRadius = 150;
var insideRadius = 100;
var angles = [30, 13, 45, 35, 65, 105, 67];
var rgb=[204, 255, 255, 255, 150, 153, 204, 1, 18, 255, 204, 217,153, 255, 255,242, 242, 166,153, 204, 255];
var reviewB = [[5,50],[10,70],[15,75],[70,20],[80,5]];
var reviewUp = [["schlecht"],["great"]];
var reviewRate = 4;
var bar;
var img2;
function preload() {
  table1 = loadTable("try.csv","csv", "header");
  img2 = loadImage("Bild2.png");
  //table2 = loadTable("http://127.0.0.1:3306/AWK_Products_Comments.txt_de_TOKENS");
}

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  //var _sql = "select author from AWK_Products_Comments.txt_de_TOKENS";
  print(connectSetup());
  //print(resultQuery[0]);
  len_table1= table1.getRowCount();
  var x = 0;
  var y = random(-1000,0);
  for (var i = 0; i <len_table1; i++) {
    var stream = new Stream();   
    stream.generateSymbols(x, y, table1.getRow(i).getString(1),table1.getRow(i).getString(0)[0]);
      //print(table.getRow(i).getString(0)[0]);
    streams.push(stream);
    x += symbolSize;
    if(x>window.innerWidth) {x=0; y +=  (-window.innerWidth+random(-1000,0));}
  }    
  textFont('Consolas');
  textSize(symbolSize);
  /* end of the rainfall part*/
    
  /* start of the pie part*/
  circle_x = window.innerWidth/2;
  circle_y = window.innerHeight/2;
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