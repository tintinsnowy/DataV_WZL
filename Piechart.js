var StepPie =1;
function drawPie(){
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
    
    this.setLine = function(idShow,it) {   
        strokeWeight(2.0);
        strokeCap(ROUND);
        stroke(106);

        //beginShape(POINTS);
        var tem_x = circle_x/it+155*cos((2*this.last+radians(angles[idShow]))/2);
        var tem_y = circle_y/it+155*sin((2*this.last+radians(angles[idShow]))/2);
        var tem_x2 = 0;
        if (tem_x<circle_x) tem_x2 = tem_x-80;
        else tem_x2 = tem_x+80;
        line(circle_x/it,circle_y/it,tem_x, tem_y);
        line(tem_x, tem_y,tem_x2,circle_y/it+155*sin((2*this.last+radians(angles[idShow]))/2));
        //endShape();      
    }

    this.pieDisA = function(){
        
    }    
}
