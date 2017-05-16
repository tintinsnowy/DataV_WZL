var barStep = 1;
var circleSpeed =5;
var listBL = 0; //the length of list
//var d3 = require("d3");
var downNum = 0; //how many time has been execuated.
var circlesList=[];
var tx=0,ty=0,tr=0;
function drawBar(bar) {
    //image(pg2,0,0);
    background(0,150);
    //fill(212,28,172);
    var node;
    var order=0;
   	bar.generateCircle();

    if(barStep == 1 ){
       bar.upGrid();
       //pieTime(15);
       barStep =2;
    }
    else if(barStep ==2){
        barTime(1,bar,1);
        barStep =3;
    }
	else if(barStep == 3){
        //pieTime(5);
        bar.downGrid();
        for(var i = 0; i< reviewRate-1 ;i++){
            var listB = reviewB[i];
            order = order + listB[0] + listB[1];
        }
        node = circlesList[order];
        tx = node.x;
        ty = node.y;
        tr = node.r;
        downNum++;         
        if( downNum*4 >= listBL)
           barStep = 4;

	}
    else if(barStep == 4){
        
        if (tx > 300) tx -= circleSpeed; //print(tx);
        if (ty < window.innerHeight*0.8) ty += circleSpeed;
        if (tr < 69 ) tr += circleSpeed; 
        bar.enlargeCircle(tx,ty,tr);
        //Step = 1;
        //print(connectSetup());
        barStep = 5;
    }
    else if(barStep == 5){
        
        barTime(8,bar,2);
        upData();

    }
	
}

function upData(){
    var data;
    $(document).ready(function(){
    $.ajax({
            type: "get",            //使用的方式，get 还是 post
            dataType: "text",       //使用的数据格式
            url: "/public/Barfall",         //发送的地址
            data: "",
            async:false,  //very usaful configure
            success: function(msg){  
                data = JSON.parse(msg);
            },error: function (msg) {
           alert("fehler"); //错误信息
        }
    });
    });
    var stra = data[0].comment;
    var strb = table1[0].comment;
    if(stra.localeCompare(strb)!=0) 
    {table1 = data;print("okay");Step = 1;}
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
		
		textSize(18);
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
        //textSize(12);
		var id =0; 
        var order =0;
		while(id<5){
            var xNum = window.innerWidth*2/5+id*30;
			var yNum = window.innerHeight/2;
            push();
            fill(255);
			text(id+1,  xNum,  yNum);
            pop();
			var listB = reviewB[id];
			// positive 
			var rowNum = int(listB[1]/3);
            var aim = yNum-30;
            //print(rowNum);d
            for (var i = 1; i<= int(listB[0]/3)+int(listB[1]/3); i++){
				for (var j = 1; j<4; j++,++order){
					if( i <= rowNum){
                        push();
                        fill(255, 80, 80); 
                        //noStroke();
						circleFall(order, yNum+5+i*5);
                        pop();
					}
					else{
						fill(102, 204, 255);
                        circleFall(order, aim);
                        if(j==3)
                            aim -= 5;
					}                                
				}  
			}//end of for 1
			id++;
		} //end of while
        listBL = order-1;
        //print(circlesList.length);

	}/* end of the function of downGrid*/
    
    
    this.enlargeCircle = function(x,y,r){
        // firs find the circle     
        //textSize(12);
		for(var i  = 0; i<=listBL; i++){
            var tx = circlesList[i].x ;//* window.innerWidth/circlesList[i].sx;
            var ty = circlesList[i].y ;//* window.innerHeight/circlesList[i].sy;
            var xNum = window.innerWidth*2/5+(i-1)*30;
			var yNum = window.innerHeight/2;
            if( i <=5 && i >= 1) text(i,  xNum,  yNum);
            if(ty> yNum){
                push();
                fill(255, 80, 80);
                ellipse(tx, ty, circlesList[i].r,circlesList[i].r);
                pop();
            }else{
                push();
                fill(102, 204, 255);
                ellipse(tx, ty, circlesList[i].r,circlesList[i].r);
                pop();
                
                
            }
		}      
        //print(circlesList[50].y);
        //this.downGrid();
        imageMode(CENTER);
        //if(table1[0].rating>=3){
        //image(img2, x, y,r,r);
        text("the lastest rating: "+ table1[0].rating,  tx+50,  ty+20);
        text(table1[0].comment,  tx+50,  ty+40);   
        //}
    //    else{
            text("the lastest rating: "+ table1[0].rating,  tx+50,  ty+20);
            text(table1[0].comment,  tx+50,  ty+40);   
        //}
    }
}

function circles(x,y,r,sx,sy){
	this.x = x;
	this.y = y;
	this.r = r;
    this.sx = sx;
    this.sy = sy;
}
function circleFall(order,aim){
    var fy = circlesList[order].y;
	if ( circlesList[order].y < aim ) circlesList[order].y+=circleSpeed;
    var tx = circlesList[order].x;// * window.innerWidth/c.sx;
    var ty = circlesList[order].y;// * window.innerHeight/c.sy;
	ellipse(tx,ty, circlesList[order].r,circlesList[order].r);
    // the last updatel
 
}
function barTime(seconds,bar,tag){
    var m = second();
    while(second() != int(m+seconds)%60){
        if( tag ==1)
          bar.upGrid();
        else if(tag ==2)
          bar.enlargeCircle(tx,ty,tr);
    }
}
