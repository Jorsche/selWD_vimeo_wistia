const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const axios = require('axios');
const wikiWebsite= "https://en.wikipedia.org/wiki/Main_Page";
const nikeWebsite = 'https://www.nike.com/sg/launch';
const targetUrl ="https://www.nike.com/sg/launch/t/dunk-low-samba";
let staticCount = 0 ;
let loopCount = 0;



//*[@id="root"]/div/div/div[1]/div/div[3]/div[2]/div/section[1]/div[2]/aside/div/div[2]/div/div[2]/ul/li[1]/button
//div[@class="buying-tools-container"/size-grid-dropdown size-grid-button
chrome.setDefaultService(new chrome.ServiceBuilder("/Users/admin/ChromeDriver2.41/chromedriver").build());
const driver = new webdriver.Builder().forBrowser('chrome').build();
const init = async() => {
    await driver.get(targetUrl);
};
init();
const offlineRequest = async () => {
    try {
        const resp = await axios.get(nikeWebsite);
        console.log(resp.data);
        staticCount = resp.data.length;
        console.log(staticCount);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

const loopGet = async () => {
    try {
        const resp = await axios.get(wikiWebsite);
        loopCount = resp.data.length;
    } catch (err) {
        console.error(err);
    }
};

while(true){
    try {
        const resp = await axios.get(wikiWebsite);
        loopCount = resp.data.length;
    } catch (err) {
        console.error(err);
    }
}
const main =async()=> {
    // for(var i=0; i<5; i++) {
    //     console.log("looop",i);
    //     offlineRequest();
    // }
    // while(true) {
    //     loopGet();
    //     if (staticCount === loopCount) {break;}
    // }
    await open(wikiWebsite);
    let press = document.getElementsByName("Contents");
    press.click();

    // let shoeSizeButton = document.getElementsByName("US S (4–6)");
    // shoeSizeButton.click();
    // let addToBagButton = document.getElementsByName("ADD TO BAG");
    // addToBagButton.click();



}



