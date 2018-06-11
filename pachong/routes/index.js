var express = require('express');

var iconv = require("iconv-lite");
var cheerio=require('cheerio');

var http=require('http');


var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {



    function runAsync() {
        var data = new Promise(function (resolve, reject) {

            http.get("http://sports.163.com/world", function (res) {

                var html = "";

                res.on('data', function (chunk) {

                    html += iconv.decode(chunk, 'GBK')

                });

                res.on('end', function () {

                    var $ = cheerio.load(html); //采用cheerio模块解析html

                    console.log("成功");

                    resolve($);


                });



            });

        });
        return data;
    }

    runAsync().then(function ($) {

         var text=$(".breadcrumbs").text();

        console.log(text);

        res.send(text);

    }).catch(function()
    {
        res.send("9999999");

    })




});

module.exports = router;
