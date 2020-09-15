const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const {By} = require("selenium-webdriver");
const {Key} = require("selenium-webdriver");
const JSSoup = require('jssoup').default;
const fs = require('fs');
const cpURL = "https://www.cleverprogrammer.com/login";
const userName = "joshbk1@outlook.com";
const pw ="1qa2ws3ed4rf";

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {
    'args': ['--headless', '--disable-gpu']
});

chrome.setDefaultService(new chrome.ServiceBuilder("/Users/admin/ChromeDriver2.41/chromedriver")
    .build());
const driver = new webdriver.Builder().forBrowser('chrome')
    .build();
//implicit
//u know exasctly how much u need to wait
//await driver.manage().setTimeouts( { implicit: 10000 } );
//
// driver.manage().timeouts().implicitlyWait(10);
// //explicit
// await driver.wait(() => documentInitialised(), 10000);
// let ele = await driver.wait(until.elementLocated(By.css('p')),10000);
// await driver.wait(until.elementLocated(By.id('foo')), 30000);


const init = async() => {
    await driver.get(cpURL);
    await driver.findElement(By.id("member_email")).sendKeys(userName);
    await driver.findElement(By.id("member_password")).sendKeys(pw);
    await driver.findElement(By.className("btn btn--block btn--solid btn--med")).sendKeys(Key.RETURN);
    await driver.findElement(By.className("btn btn--block btn--outline btn--small btn-cta")).sendKeys(Key.RETURN);
    //loop
    //first row Sonny
    await driver.findElement(By.xpath("//a[@href='https://www.cleverprogrammer.com/products/profit-with-javascript/categories/2266049']")).sendKeys(Key.RETURN);

    //loop --done
    let numOfVideos =await driver.findElements(By.xpath("//*[@id='section-category_outline']/div/a"));
    console.log("numOfvideo", numOfVideos);

    for(let i=11;i<=numOfVideos.length;i++){
        //19 not run
        console.log("length",numOfVideos.length);
        console.log("i",i);
        //every videos in sonny
        //correct
        await driver.findElement(By.xpath(`//*[@id='section-category_outline']/div/a[${i}]`)).sendKeys(Key.RETURN);


        // const result =  await driver.findElement(By.xpath(`//*[@id='responsive-video-0']/iframe`));
        //  console.log("result",result);


        await writeContent();
        await driver.findElement(By.xpath("//a[@href='https://www.cleverprogrammer.com/products/profit-with-javascript/categories/2266049']")).sendKeys(Key.RETURN);
    }
    await driver.quit();
//  await driver.findElement(By.xpath("//a[@href='https://www.cleverprogrammer.com/products/profit-with-javascript/categories/2822313']")).sendKeys(Key.RETURN);
};

const writeContent =async ()=>{
    const title = await driver.findElement(By.className("post-body-title")).getText();
    console.log("title",title);
    let pgSrc =await driver.getPageSource();
    let js = new JSSoup(pgSrc);
    // console.log(""js);
    let result = js.findAll('div','responsive-video');
    // console.log("next",result[0].nextElement.attrs.src);
    let retrieveResults = `${title} + \n + ${result[0].nextElement.attrs.src} +\n`;
    console.log("retrieveResults",retrieveResults);
// await fs.appendFile('cp3.txt', retrieveResults,(err)=>{if(err) console.log(err);});
}

init();






