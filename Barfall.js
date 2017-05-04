var barStep = 1;
var barNum = 0;
//var d3 = require("d3");
function drawBar() {
    //image(pg2,0,0);
    background(50,150);
    fill(212,28,172);
	var bar = new fiBar();
//    if(barStep == 1 && barNum<5){
//		bar.baseGrid(barNum);
//		if(barNum<=4)
//		   barNum++;
//	}
//	else if(barStep == 2){
//		bar.seBar();
//	}
	bar.upGrid();
}

function fiBar(){
	
	this.upGrid = function(){
		
		textSize(12);
		fill(255);
     	var id = 0;

		while(id<5){

			var xNum = window.innerWidth*2/5+id*30;
			var yNum = window.innerHeight/2;
			text(id+1,  xNum,  yNum);
			var listB = reviewB[id];
			// positive 
			var xCircle = xNum -5;
			var yCircle = yNum -20;
			for(var i = 1; i < (listB[0]+listB[1])/3; i++){
				for (var j = 1; j<4; j++){
					//push();
					fill(255);
					ellipse(xCircle+j*5, yCircle, 5, 5);
					//pop();
				}
				yCircle -= 10;
				xCircle = xNum -5;
			}//end of for
			id++;
		} //end of while  
	    //print(window.innerWidth);
	}
	
	this.downGrid = function(){
		this.upGrid();
		
		while(id<5){
			var xNum = window.innerWidth*2/5+id*30;
			var yNum = window.innerHeight/2;
			text(id+1,  xNum,  yNum);
			var listB = reviewB[id];
			// positive 
			var xCircle = xNum -5;
			var yCircle = yNum -20;
			for(var i = 1; i < (listB[0]+listB[1])/3; i++){
				for (var j = 1; j<4; j++){
					//push();
					fill(255);
					ellipse(xCircle+j*5, yCircle, 5, 5);
					//pop();
				}
				yCircle -= 10;
				xCircle = xNum -5;
			}//end of for
			id++;
		} //end of while  
		
	}
}

function barLegend(){
	
}