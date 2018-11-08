var appkey="228bf094169a40a3bd188ba37ebe8723";
var busiDataStr="GET&%2Fv3%2Fuser%2Fget_info&appid%3D123456%26format%3Djson%26openid%3D11111111111111111%26openkey%3D2222222222222222%26pf%3Dqzone%26userip%3D112.90.139.30";
var crypto = require('crypto');
var sig = crypto.createHmac('sha1', appkey+'&').update(busiDataStr).digest().toString('base64');
console.log(sig);