 var len=-1;
var data;
function connectSetup(){
    $(document).ready(function(){
    $.ajax({
            type: "get",            //使用的方式，get 还是 post
            dataType: "text",       //使用的数据格式
            url: "/public/connectDB",         //发送的地址
            data: "",//
            //async:false,  //very usaful configure
            success: function(msg){  //得到回复以后的回调函数
                //===将字符串转化为 Object jSon
                msg = JSON.parse(msg);
                alert(msg[0].rating);
                //  len = msg.length;
                //len = msg;
            }
           ,error: function (msg) {
         alert("error"); //错误信息

        }
    });
  });
    print(len);
    //saveJSON(data,"D:/LenovoCloud/ubuntu/WZL-project/datav/dd.json");
    return len;
}