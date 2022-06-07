"use strict";// строгий режим
var constants = require('./constants');     // подключаю блок констант
// Общий класс сайта
module.exports = class Site {
    type = constants.SITE_DEFAULT;
    static displayName = "Site ";
    //конструктор
    constructor(type){
        this.type = type;
    }

    getProduct(url){
        console.log(this.type + ' parse URL - ' + url);
    }
 
}


    
