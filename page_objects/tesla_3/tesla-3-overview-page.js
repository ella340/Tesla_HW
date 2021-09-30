"use strict";

class Tesla3 {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $orderNowBtn() { return $('[class="callout hero-callouts--button tcl-animate tcl-animate--to-reveal tcl-animate--revealed"]'); }
    get $model3PriceTag() { return $('[class="finance-type finance-type--cash"]'); }
    get $continueToPaymentBtn() { return $('[data-subtype="btn-navigation--payment"]'); }
    get $addFullSelfDrivingBtn() { return $('[class="tds-btn tds-btn--blue tds-btn--small"]'); }
    get $yourModel3header() { return $('[class="cf-h2-title tds-text--center"]'); }
}

module.exports = new Tesla3();