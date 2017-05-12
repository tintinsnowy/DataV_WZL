var express = require('express');
var qs = require("querystring");
var _mysql = require('mysql');
var url = require("url");

var connectDB =  require("./public/connectDB.js");

var app = express();
var server = app.listen(3000);
var resultQuery;

app.use(express.static('public'));
console.log("My socket server is running");

var resultQuery;
var mysql = _mysql.createConnection({
        //host
        host: '127.0.0.1',
        //user
        user: 'root',
        //password
        password: '689468',
        //port
        port: 3306,
        //the name of database
        database: 'datav'
    });  
    var _sql = "SELECT author from `awk_products_comments.txt_de_tokens` where rating = 2";

app.get('/public/connectDB', function(req, res) {
    var sInfo = qs.parse(url.parse(req.url).query);
    //var sql = 'select keyword from t_search where keyword like ?';
    mysql.query(_sql, function(error, results){
        if(error){
            console.log(error);
            res.end();
        }
        else{
            //===将jSon转换为字符串传输
            var strJson = JSON.stringify(results[0]);
            console.log("query succeed..." +strJson);
            res.write(strJson);
            res.end();
        }
    });
});
//
//    //create a connection
//    mysql.connect(function (err) {
//        if (err) {
//            console.log('connect-' + err);
//        }
//        console.log('connect succeed...');
//    });
//
//var arr = [];
//    mysql.query(_sql, function (err, rows) {
//        if (err) {
//            console.log("query-" + err);
//        }
//        console.log("query succeed..." + rows);
//        //resultQuery = results;
//         for (var i = 0; i < rows.length; i++) {
//             arr[i] = rows[i].name;
//         }   
//    });
//
    //关闭连接
//    mysql.end(function (err) {
//        if (err) {
//            return;
//        }
//        console.log("close succeed...");
//    });
