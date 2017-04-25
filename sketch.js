var streams = [];
var fadeInterval = 0.6;
var symbolSize = 18;
var table1;
var len_table1;
var Step=1;
var pg1;// the sketches for the rainfalls.
var pg2;// the sketches

function preload() {
  table1 = loadTable("try.csv","csv", "header");
}

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  pg1 = createGraphics(window.innerWidth,window.innerHeight);
  pg2 = createGraphics(window.innerWidth,window.innerHeight);

// the rainfall of words
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
  pg1.textFont('Consolas');
  pg1.textSize(symbolSize);
  /* end of the rainfall part*/
    
  /* start of the pie part*/
  
    
  /* end of the pie part*/
}

function draw() {
    
    // the first screen
    if (Step==1){
        drawRainFall();
        image(pg1,0,0);
        var strs = streams[streams.length-1];
        var last = strs.symbols;
        if(last[last.length-1].y > window.innerWidth)
            Step =2;
    }
    else if(Step==2){
        pg2.background(0,150);
        drawPieChart();
        image(pg2,0,0);
    }
}
