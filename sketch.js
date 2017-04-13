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
  for (var i = 0; i <len_table; i++) {
    var stream = new Stream();
  
    stream.generateSymbols(x, random(-1000, 0),table.getRow(i).getString(0),table.getRow(i).getString(1));
    streams.push(stream);
    x += symbolSize
  }

  textFont('Consolas');
  textSize(symbolSize);
}

function draw() {
  background(0, 150);
  streams.forEach(function(stream) {
    stream.render();
  });
}

function Symbol(x, y, speed,value,rate) {
  this.x = x;
  this.y = y;
  this.value=value;
  this.rate = rate;
  this.speed = speed;

  this.switchInterval = round(random(2, 25));

  this.rain = function() {
    this.y += this.speed;
  }

}

function Stream() {
  this.symbols = [];
  this.totalSymbols ;
  this.speed = random(5, 55);
    
  this.generateSymbols = function(x, y, rate,str) {
    this.totalSymbols=str.length;
    var len =this.totalSymbols;
    for (var i =0; i < len; i++) {
      symbol = new Symbol(
        x,
        y,
        this.speed,
          str[i],
          rate
      );
      this.symbols.push(symbol);
      //opacity -= (255 / this.totalSymbols) / fadeInterval;
      y -= symbolSize;
    }
  }

  this.render = function() {
      this.symbols.forEach(function(symbol) {
          print(symbol.rate);

        if(symbol.rate=='1')
         fill(0,  0, 240);
        else if(symbol.rate=='3')
          fill(140, 255, 170);
        else 
          fill(240, 10, 70);
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
     // symbol.setToRandomSymbol();
    });
  }
}

