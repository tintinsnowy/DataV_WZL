var barStep = 1;
var barNum = 0;
var circleSpeed =5;
//var d3 = require("d3");
var circlesList=[];
function drawBar(bar) {
    //image(pg2,0,0);
    background(50,150);
    //fill(212,28,172);
    if(barStep == 1 ){
       bar.upGrid();
       //pieTime(15);
       barStep =2;
    }
    else if(barStep ==2){
        pieTime(1);
        barStep =3;
    }
	else if(barStep == 3){
        //pieTime(5);
        bar.downGrid();
	}
	//bar.generateCircle();
	
}

function Fibar(){
	this.generateCircle = function() {
		var id = 0;
       
		while(id<5){

			var xNum = window.innerWidth*2/5+id*30;
			var yNum = window.innerHeight/2;
			//text(id+1,  xNum,  yNum);
			var listB = reviewB[id];
			// positive 
			var xCircle = xNum -5;
			var yCircle = yNum -20;
			for(var i = 1; i <= int(listB[0]/3)+int(listB[1]/3); i++){
				for (var j = 1; j<4; j++){
					var tempC = new circles(xCircle+j*5, yCircle, 5,window.innerWidth,window.innerHeight);
					circlesList.push(tempC);
				}
				yCircle -= 5;
				xCircle = xNum -5;
			}//end of for
			id++;
		} //end of while  
	}
	this.upGrid = function(){
		
		textSize(12);
		fill(255);
        
		for(var i  = 0; i<circlesList.length; i++){
            var tx = circlesList[i].x ;//* window.innerWidth/circlesList[i].sx;
            var ty = circlesList[i].y ;//* window.innerHeight/circlesList[i].sy;
			ellipse(tx,ty, circlesList[i].r,circlesList[i].r);
            var xNum = window.innerWidth*2/5+(i-1)*30;
			var yNum = window.innerHeight/2;
            if(i<=5&&i>=1) text(i,  xNum,  yNum);
		}
   	}
	
	this.downGrid = function(){
		//this.upGrid();
         fill(255);
		var id =0; 
        var order =0;
		while(id<5){
            var xNum = window.innerWidth*2/5+id*30;
			var yNum = window.innerHeight/2;
			text(id+1,  xNum,  yNum);
			var listB = reviewB[id];
			// positive 
			var rowNum = int(listB[1]/3);
            var aim = yNum-30;
            //print(rowNum);
            for (var i = 1; i<= int(listB[0]/3)+int(listB[1]/3); i++){
				for (var j = 1; j<4; j++,++order){
					if( i <= rowNum){
						circleFall(circlesList[order], yNum+5+i*5);
					}
					else{
						fill(255); 
                        circleFall(circlesList[order], aim);
                        if(j==3)
                            aim -= 5;
					}                                
				}  
            //print();
			}//end of for
			id++;
			
		} //end of while  
		// the following	
	}
}

function circles(x,y,r,sx,sy){
	this.x = x;
	this.y = y;
	this.r = r;
    this.sx = sx;
    this.sy = sy;
}
function circleFall(c,aim){
	if(c.y<aim) c.y+=circleSpeed;
    var tx = c.x;// * window.innerWidth/c.sx;
    var ty = c.y;// * window.innerHeight/c.sy;
	ellipse(tx,ty, c.r,c.r);
}