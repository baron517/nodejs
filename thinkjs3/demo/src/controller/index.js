const Base = require('./base.js');

const cheerio=require('cheerio');

const fly=require("flyio")

module.exports = class extends Base {
  async  indexAction() {


   /* function getFromApi()
    {

      return fly.get('https://tl.pro.youzewang.com/Api/CommonApi/test');


    }

    const value = await getFromApi();*/


    for(var i=0;i<5000;i++)
    {
      console.log(i);
      fly.post('https://tl.pro.youzewang.com/Api/CommonApi/test', {
            code:1000,msg:"success",data:"试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            //console.log(error);
          });

    }

    return this.success({name:"12388889888"},"我们88888888");


  }


  async  findAction() {


    let model = this.model('list');
    let data = await model.where({id: '57831'}).find();


    return this.success({name:"12388889888",data:data},"我们88888888");


  }


};
