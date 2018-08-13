const Base = require('./base.js');

const cheerio=require('cheerio');

const fly=require("flyio")

module.exports = class extends Base {
  async  indexAction() {


    function getFromApi()
    {

      return fly.get('https://www.qichacha.com/search_index?key=%25E6%2595%2599%25E8%2582%25B2&ajaxflag=1&province=BJ&sortField=startdate-false&');


    }

    const value = await getFromApi();


    return this.success({name:"12388889888",data:value.data},"我们88888888");


  }


  async  findAction() {


    let model = this.model('list');
    let data = await model.where({id: '57831'}).find();


    return this.success({name:"12388889888",data:data},"我们88888888");


  }


};
