var express = require('express');

var iconv = require("iconv-lite");
var cheerio=require('cheerio');

var http=require('http');


var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {



    function runAsync() {
        var data = new Promise(function (resolve, reject) {

            http.get("https://www.qichacha.com/search_index?key=%25E6%2595%2599%25E8%2582%25B2&ajaxflag=1&province=BJ&sortField=startdate-false&", function (res) {

                var html = "";

                res.on('data', function (chunk) {

                    html += iconv.decode(chunk, 'GBK')
                    console.log(html)

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

         //var text=$(".breadcrumbs").text();

        console.log(text);

        res.send("成功");

    }).catch(function()
    {
        res.send("9999999");

    })




});

module.exports = router;
