var StepPie = 1;
var pieR = 1;
var lastAngle = 0;
var ti=0;
var nameTool = ["Quercetti 2341","Schmidt Spiele 51206","Zauberwürfel - Gear Cube","Knobelei von WZL"];

function piePre(){
    angles[3] = table1.length;
    var sumA=0
    for (var i = 0; i<4; i++) 
        sumA += angles[i];
    for (var i = 0; i<4; i++) 
    angles[i] = int(angles[i]*360/sumA);
}
function drawPie() {
    //image(pg2,0,0);
    background(0,150);
    ellipseMode(RADIUS);  // Set ellipseMode to RADIUS
    var pie = new pieChart();
    if(StepPie==1){
        
        var r = pie.pieAppear(outsideRadius,angles,3);  // Draw white ellipse using RADIUS mode
		    pieR = r*pieR;
		    pieR+=1;
		if( pieR == 4){
			StepPie = 2;
			pieTime(5);
		}
        
	}
    else if(StepPie == 2){
		 
        lastAngle+=0.01;
		pie.pieDis(outsideRadius,angles, 3, lastAngle);
		if((ti-0.0)<0.001) Step =3;
	}
        
    ellipseMode(CENTER);  // Set ellipseMode to CENTER
    fill(0,250);  // Set fill to gray
    ellipse(circle_x/ti, circle_y/ti, insideRadius, insideRadius);  // Draw gray ellipse using CENTER mode
     
}

function pieChart() {
    this.last = 0;
    this.round = 0;
	
    this.pieAppear = function(diameter, data,idShow){
        if(ti<1.60)
        ti += 0.01;
        scale(ti);
        this.pieLegend();

        for (var i = 0; i < data.length; i++) {

            fill(rgb[i*3],rgb[i*3+1],rgb[i*3+2],(ti*255));
            noStroke();
            if((1.6-ti) < 0.001 && i == idShow){
                
                this.setLine(idShow,ti);
                noStroke();
                translate(15*cos((2*this.last+radians(data[i]))/2), 15*sin((2*this.last+radians(data[i]))/2));
                arc(circle_x/ti,circle_y/ti, diameter+data[i]*0.8, diameter+data[i]*0.8, this.last, this.last+radians(data[i]),PIE);
                translate(-15*cos((2*this.last+radians(data[i]))/2), -15*sin((2*this.last+radians(data[i]))/2));
           		this.round = 1;
            
            }else
            {arc(circle_x/ti, circle_y/ti, diameter+data[i]*0.8, diameter+data[i]*0.8, this.last, this.last+radians(data[i]),PIE);}
            
            this.last += radians(data[i]);
        }
		return  this.round;
	}
    
    this.setLine = function(idShow) {   
        strokeWeight(1.0);
        strokeCap(ROUND);
        stroke(80);
        var offs;
        var tem_x = circle_x/ti+155*cos((2*this.last+radians(angles[idShow]))/2);
        var tem_y = circle_y/ti+155*sin((2*this.last+radians(angles[idShow]))/2);
        var tem_x2 = 0;
        if (tem_x < circle_x/ti){tem_x2 = tem_x-50; offs = -20;}
        else {tem_x2 = tem_x+50; offs = 20;}
        line(circle_x/ti,circle_y/ti,tem_x, tem_y);
        line(tem_x, tem_y,tem_x2,tem_y);
        this.pieNum(idShow,tem_x2,tem_y,offs);
    }

    this.pieNum = function(idShow, tem_x, tem_y,offs){
        //noStroke();
        noStroke();
        fill(255);
        var x = angles[idShow];
        var i = 0;
        //push();
        textSize(16); fill(240);
        textFont("Georgia");
        text("The Transaction of 4 Products",window.innerWidth/4, 50);
        while(x>0){
            var  num = int(x%10);
            textSize(28);
            text(num, tem_x+offs-i, tem_y+5);
            i += 12; 
            x = int(x/10);
        }
        textSize(6);
        fill(180);
        text("people made comments ",tem_x+offs-10, tem_y+20);
        text("about Knobelei von WZL",tem_x+offs-10, tem_y+35);
        fill(rgb[idShow*3],rgb[idShow*3+1],rgb[idShow*3+2],(ti*255));
		//pop();
        
        
    }
    
    // Start to disappear
    this.pieDis = function(diameter, data, idShow, last){
        if(ti>0.0)
        ti -= 0.01;
        scale(ti);
        this.pieLegend();
        for (var i = 0; i < data.length; i++) {

            fill(rgb[i*3],rgb[i*3+1],rgb[i*3+2],(ti*255));
            noStroke();
            arc(circle_x/ti, circle_y/ti, diameter+data[i]*0.8, diameter+data[i]*0.8, last, last+radians(data[i]),PIE);
            last += radians(data[i]);
        }
    }
    
    this.pieLegend = function (){
        // - legend begin
        push();
        strokeWeight(12.0);
        strokeCap(ROUND);
        strokeWeight(10);
        for(var i =0; i<4; i++){
            stroke(rgb[i*3],rgb[i*3+1],rgb[i*3+2],(ti*255));
            line(30, 30+i*15, 40, 30+i*15);
            fill(180);
            noStroke(); textSize(7);
            text(nameTool[i],50, 35+i*15);
        }
       
        pop();
    }
}

function pieTime(seconds){
    var m = second();
    while(second() != int(m+seconds)%60){
    }
}


