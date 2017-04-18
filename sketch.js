var streams = [];
var fadeInterval = 1.6;
var symbolSize = 18;
var table;
var len_table;

function preload() {
  table = loadTable("try.csv","csv", "header");
}

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);
  
  len_table= table.getRowCount();
  var x = 0;
  var y = random(-1000,0);
  for (var i = 0; i <len_table; i++) {
    var stream = new Stream();   
    stream.generateSymbols(x, y, table.getRow(i).getString(1),table.getRow(i).getString(0)[0]);
      //print(table.getRow(i).getString(0)[0]);
    streams.push(stream);
    x += symbolSize;
    if(x>window.innerWidth) {x=0; y +=  (-window.innerWidth+random(-1000,0));}
  }

  textFont('Consolas');
  textSize(symbolSize);
}

function draw() {
  background(0, 150);
    var i=0;
  streams.forEach(function(stream) {
    stream.render();
  });
}

function Symbol(x, y, speed,value,rate,opacity) {//,rate
  this.x = x;
  this.y = y;
  this.value=value;
  this.rate = rate;
  this.speed = speed; 
 this.opacity = opacity;

  this.switchInterval = round(random(2, 25));

  this.rain = function() {
    this.y += 0.7*this.speed;
  }

}

function Stream() {
  this.symbols = [];
  this.totalSymbols ;
  this.speed = random(45, 125);
    
  this.generateSymbols = function(x, y, str,rate) {//rate,
    this.totalSymbols= str.length;
    var len =this.totalSymbols;
    var opacity = 255;

    for (var i =0; i < len; i++) {
      symbol = new Symbol(
        x,
        y,
        this.speed,
          str[i],
          rate,
          opacity
      );
      this.symbols.push(symbol);
      opacity -= (255 / this.totalSymbols) / fadeInterval;
      y -= symbolSize;
    }
  }

  this.render = function() {
      this.symbols.forEach(function(symbol) {
          //print(symbol.rate);
        if(symbol.rate=='1')
         fill(152, 245, 255,symbol.opacity);
        else if(symbol.rate=='3')
          fill(140, 255, 170,symbol.opacity);
        else 
          fill(255, 106, 106,symbol.opacity);
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
     // symbol.setToRandomSymbol();
    });
  }
}

