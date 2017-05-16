
function drawRainFall(){
     background(0, 150);
     streams.forEach(function(stream) {
     stream.render();
});  
}

function rainData(){
   len_table1= table1.length;
   var x = 0;
   var y = random(-1000,0);
   for (var i = 0; i <len_table1; i++) {
        
        var stream = new Stream();   
        stream.generateSymbols(x, y, table1[i].comment,table1[i].rating);
           //print
        streams.push(stream);
        x += symbolSize*5;
        if( x>window.innerWidth ) {x=0; y +=  (-window.innerWidth+random(-1000,0));}
  }    
  textFont("Georgia");
  textSize(symbolSize);
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
            fill(152, 245, 255,symbol.opacity);
          else if(symbol.rate=='2')
            fill(140, 250, 170,symbol.opacity);
          else if(symbol.rate=='3')
            fill(57, 230, 0,symbol.opacity);
          else if(symbol.rate=='4')
            fill(0, 172, 230,symbol.opacity);
          else 
            fill(255, 102, 217,symbol.opacity);
      
            text(symbol.value, symbol.x, symbol.y);
          }
       symbol.rain();
     // symbol.setToRandomSymbol();
    });
  }
}