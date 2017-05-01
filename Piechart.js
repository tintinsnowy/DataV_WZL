var StepPie = 1;
function drawPie() {
    //image(pg2,0,0);
    background(50,150);
    ellipseMode(RADIUS);  // Set ellipseMode to RADIUS
    var pie = new pieChart();
    if(StepPie==1)
        pie.pieAppear(30,angles,4);  // Draw white ellipse using RADIUS mode   
    else if(StepPie == 2)
        
    ellipseMode(CENTER);  // Set ellipseMode to CENTER
    fill(50,255);  // Set fill to gray
    ellipse(circle_x/ti, circle_y/ti, 20, 20);  // Draw gray ellipse using CENTER mode
 
}

function pieChart() {
    this.last = 0;
    
    this.pieAppear = function(diameter, data,idShow){
        if(ti<1.60)
        ti += 0.01;
        scale(ti);

        for (var i = 0; i < data.length; i++) {

            fill(rgb[i*3],rgb[i*3+1],rgb[i*3+2],(ti*255));
             noStroke();
            if((1.6-ti) < 0.001 && i == idShow){
                this.setLine(idShow,ti);
                
                noStroke();
                translate(15*cos((2*this.last+radians(data[i]))/2), 15*sin((2*this.last+radians(data[i]))/2));
                arc(circle_x/ti,circle_y/ti, diameter+data[i], diameter+data[i], this.last, this.last+radians(data[i]),PIE);
                translate(-15*cos((2*this.last+radians(data[i]))/2), -15*sin((2*this.last+radians(data[i]))/2));
                
            }else
            {arc(circle_x/ti, circle_y/ti, diameter+data[i], diameter+data[i], this.last, this.last+radians(data[i]),PIE);}
            this.last += radians(data[i]);
        }
    }
    
    this.setLine = function(idShow) {   
        strokeWeight(2.0);
        strokeCap(ROUND);
        stroke(100);

        //beginShape(POINTS);
        var tem_x = circle_x/ti+155*cos((2*this.last+radians(angles[idShow]))/2);
        var tem_y = circle_y/ti+155*sin((2*this.last+radians(angles[idShow]))/2);
        var tem_x2 = 0;
        if (tem_x<circle_x) tem_x2 = tem_x-50;
        else tem_x2 = tem_x+50;
        line(circle_x/ti,circle_y/ti,tem_x, tem_y);
        line(tem_x, tem_y,tem_x2,tem_y);
        this.pieNum(idShow,tem_x2,tem_y);
        //endShape();      
    }

    this.pieNum = function(idShow, tem_x, tem_y){
        //noStroke();
        fill(180,50,129,150);
        noStroke();
        var x = angles[idShow];
        var i = 0;
        while(x>0){
            var  num = int(x%10);
            //rect(tem_x - 35-i, tem_y, 10, 10);//x, y, w, h
            textSize(18);
            text(num, tem_x-18-i, tem_y+9);
            i += 15; 
            x = int(x/10);
        }
        fill(rgb[idShow*3],rgb[idShow*3+1],rgb[idShow*3+2],(ti*255));
        pieTime(1);
    }
    
    // Start to disappear
    this.pieDis = function(){
        
    }
}

funtion pieTime(seconds){
    var m = minute();
    while(minute==int(m+2)%60){
        pie.pieDis();
        
    }
    
}
