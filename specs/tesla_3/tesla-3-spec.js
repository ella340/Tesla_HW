const HomepagePage = require("../../page_objects/homepage-page");
const Tesla3OverviewPage = require("../../page_objects/tesla_3/tesla-3-overview-page");
const Tesla3PaymentPage = require("../../page_objects/tesla_3/tesla-3-payment-page");

const { expect } = require("chai");



it('should be able to proceed to payment page for Tesla 3', () => {
    browser.url('./');
    HomepagePage.$model3Btn.waitForDisplayed();
    HomepagePage.$model3Btn.click();
    Tesla3OverviewPage.$orderNowBtn.waitForDisplayed();
    Tesla3OverviewPage.$orderNowBtn.click();
    Tesla3OverviewPage.$model3PriceTag.waitForDisplayed();
    Tesla3OverviewPage.$continueToPaymentBtn.waitForClickable();
    Tesla3OverviewPage.$continueToPaymentBtn.click();
    Tesla3PaymentPage.$yourModel3header.waitForDisplayed();

});

it('should be able to select Tesla 3 with Full Self-Driving Capability and proceeed to the payment page', () => {
    browser.url('./');
    HomepagePage.$model3Btn.waitForDisplayed();
    HomepagePage.$model3Btn.click();
    Tesla3OverviewPage.$orderNowBtn.waitForDisplayed();
    Tesla3OverviewPage.$orderNowBtn.click();
    Tesla3OverviewPage.$addFullSelfDrivingBtn.waitForClickable();
    Tesla3OverviewPage.$addFullSelfDrivingBtn.click();
    Tesla3OverviewPage.$continueToPaymentBtn.waitForClickable();
    Tesla3OverviewPage.$continueToPaymentBtn.click();
    Tesla3PaymentPage.$yourModel3header.waitForDisplayed();
    
});

