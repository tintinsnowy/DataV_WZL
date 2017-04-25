
function drawRainFall(){
     pg1.background(0, 150);
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
    this.y += this.speed;
  }
}

function Stream() {
  this.symbols = [];
  this.totalSymbols ;
  this.speed = random(15, 55);
    
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
        if(symbol.y>=0&&symbol.y<=window.innerHeight){
          if(symbol.rate=='1')
            pg1.fill(152, 245, 255,symbol.opacity);
          else if(symbol.rate=='3')
            pg1.fill(140, 250, 170,symbol.opacity);
          else 
            pg1.fill(255, 106, 106,symbol.opacity);
      
          pg1.text(symbol.value, symbol.x, symbol.y);
          }
       symbol.rain();
     // symbol.setToRandomSymbol();
    });
  }
}