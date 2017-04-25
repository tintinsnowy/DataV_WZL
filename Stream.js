class Stream{
  
  var symbols = [];
  var totalSymbols ;
  var speed = random(5, 25);
    
  generateSymbols = function(x, y, str,rate) {//rate,
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
            fill(152, 245, 255,symbol.opacity);
          else if(symbol.rate=='3')
            fill(140, 250, 170,symbol.opacity);
          else 
            fill(255, 106, 106,symbol.opacity);
      
          text(symbol.value, symbol.x, symbol.y);
          }
       symbol.rain();
     // symbol.setToRandomSymbol();
    });
  }
}