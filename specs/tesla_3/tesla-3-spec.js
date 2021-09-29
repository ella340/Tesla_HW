const HomepagePage = require("../../page_objects/homepage-page");
const Tesla3Page = require("../../page_objects/tesla_3/tesla-3-page");

const { expect } = require("chai");


it.only('should be able to proceed to payment page for Tesla 3', () => {
    browser.url('./');
    HomepagePage.$model3Btn.waitForDisplayed();
    HomepagePage.$model3Btn.click();
    Tesla3Page.$orderNowBtn.waitForDisplayed();
    Tesla3Page.$orderNowBtn.click();
    Tesla3Page.$model3PriceTag.waitForDisplayed();
    Tesla3Page.$continueToPaymentBtn.waitForClickable();
    Tesla3Page.$continueToPaymentBtn.click();
    Tesla3Page.$yourModel3header.waitForDisplayed();

});

it('should be able to select blue Tesla 3 with Full Self-Driving Capability and proceeed to the payment page', () => {
    browser.url('./');
    HomepagePage.$model3Btn.waitForDisplayed();
    HomepagePage.$model3Btn.click();
    Tesla3Page.$orderNowBtn.waitForDisplayed();
    Tesla3Page.$orderNowBtn.click();
    Tesla3Page.$deepBlueColorBtn.waitForDisplayed();
    Tesla3Page.$deepBlueColorBtn.click();
    Tesla3Page.$addFullSelfDrivingBtn.click();

    

});
