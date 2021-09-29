"use strict";

const tesla3Page = require('./tesla_3/tesla-3-page');

class Homepage {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $modelSBtn() { return $('[href="/model3"]'); }
    get $model3Btn() { return $('[href="/model3"]'); }
    get $modelXBtn() { return $('[span=Model X]'); }
    get $modelYBtn() { return $('[span=Model Y]'); }

}


module.exports = new Homepage();