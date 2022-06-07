"use strict";// строгий режим
var constants = require('./constants');     // подключаю блок констант
// фабрика 
module.exports = class SiteFactory {
    create (type) {
        let site
        switch (type) {
            case constants.SITE_WORDPRESS:
                site = require('./wordpress.class.js');
                break;
            case constants.SITE_SHOPIFY:
                site = require('./shopify.class.js');
                break;
            case constants.SITE_ALIEXPRESS:
                site = require('./aliexpress.class.js');
                break;
            case constants.SITE_AMAZON:
                site = require('./amzon.class.js');
                break;
            default:
                site = require('./othertypesite.class.js');
                type = constants.SITE_DEFAULT;
                console.log("Sorry, we are out of " + type + " : Unknown site type. New type - type default");
        }
        return new site(type); 
    }
}
