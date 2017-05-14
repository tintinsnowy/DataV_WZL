 var len;
var data;
function connectSetup(){
    //print("ss");
    $(document).ready(function(){

    $.ajax({
            type: "get",            //使用的方式，get 还是 post
            dataType: "text",       //使用的数据格式
            url: "/public/connectDB",         //发送的地址
            data: "",//需要发送的数据，用json格式来传
            async:false,  //very usaful configure
            success: function(msg){  //得到回复以后的回调函数
                //===将字符串转化为 Object jSon
                //alert(msg);
                //msg = JSON.parse(msg);
                data = msg;
                len = msg.length;
                
            }
    });
        
});
    //print(len);
    //saveJSON(data,"D:/LenovoCloud/ubuntu/WZL-project/datav/dd.json");
    return len;
}