//const chrome = require('selenium-webdriver/chrome');
const {Builder} =require ("selenium-webdriver");
const webdriver = require('selenium-webdriver');
const {By} = require("selenium-webdriver");
const {Key} = require("selenium-webdriver");
const JSSoup = require('jssoup').default;
const fs = require('fs');
const cpURL = "https://www.cleverprogrammer.com/login";
const userName = "joshbk1@outlook.com";
const pw ="1qa2ws3ed4rf";
async function init(){
    const writeContent =async ()=>{
        const title = await driver.findElement(By.className("post-body-title")).getText();
        console.log("title",title);
        let pgSrc =await driver.getPageSource();
        let js = new JSSoup(pgSrc);
        let result = js.findAll('script','w-json-ld');
        console.log(result);
        let retrieveResults = `${title} + \n + ${result[0].nextElement["_text"]} +\n`;
        console.log("retrieveResults",retrieveResults);
// await fs.appendFile('cp3.txt', retrieveResults,(err)=>{if(err) console.log(err);});
    }
    const chromeCapabilities = webdriver.Capabilities.chrome();
    let chromeOptions = {
        'args': [ '--disable-gpu', '--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.50 Safari/537.36']
    };
    //'--headless',
    chromeCapabilities.set('chromeOptions', chromeOptions);
    let driver = await new webdriver.Builder().withCapabilities(chromeCapabilities)
        .build();

        await driver.get(cpURL);
    await driver.manage().setTimeouts( { implicit: 2500 } );

    await driver.findElement(By.id("member_email")).sendKeys(userName);
    await driver.manage().setTimeouts( { implicit: 3500 } );
    await driver.findElement(By.id("member_password")).sendKeys(pw);
    await driver.manage().setTimeouts( { implicit: 4500 } );
    await driver.findElement(By.className("btn btn--block btn--solid btn--med")).sendKeys(Key.RETURN);
    await driver.manage().setTimeouts( { implicit: 4500 } );
    await driver.findElement(By.className("btn btn--block btn--outline btn--small btn-cta")).sendKeys(Key.RETURN);
    await driver.manage().setTimeouts( { implicit: 4500 } );

    //loop
  //first row Sonny
         await driver.findElement(By.xpath("//a[@href='https://www.cleverprogrammer.com/products/profit-with-javascript/categories/2266049']")).sendKeys(Key.RETURN);
     await driver.manage().setTimeouts( { implicit: 4500 } );

    //loop --done
   let numOfVideos =await driver.findElements(By.xpath("//*[@id='section-category_outline']/div/a"));
   console.log("numOfvideo", numOfVideos);

   for(let i=1;i<=numOfVideos.length;i++){
       console.log("length",numOfVideos.length);
       console.log("i",i);
        //every videos in sonny
         //*[@id='responsive-video-0"]/iframe
       await driver.findElement(By.xpath(`//*[@id='section-category_outline']/div/a[${i}]`)).sendKeys(Key.RETURN);
        await writeContent();
       await driver.findElement(By.xpath("//a[@href='https://www.cleverprogrammer.com/products/profit-with-javascript/categories/2266049']")).sendKeys(Key.RETURN);
   }
   await driver.quit();
//  await driver.findElement(By.xpath("//a[@href='https://www.cleverprogrammer.com/products/profit-with-javascript/categories/2822313']")).sendKeys(Key.RETURN);


}


init();

//await driver.manage().setTimeouts( { implicit: 10000 } );
//
// driver.manage().timeouts().implicitlyWait(10);
// //explicit
// await driver.wait(() => documentInitialised(), 10000);
// let ele = await driver.wait(until.elementLocated(By.css('p')),10000);
// await driver.wait(until.elementLocated(By.id('foo')), 30000);

/////ddddd
//  const init = async() => {
//     await driver.get(cpURL);
//      await driver.findElement(By.id("member_email")).sendKeys(userName);
//      await driver.findElement(By.id("member_password")).sendKeys(pw);
//      await driver.findElement(By.className("btn btn--block btn--solid btn--med")).sendKeys(Key.RETURN);
//     await driver.findElement(By.className("btn btn--block btn--outline btn--small btn-cta")).sendKeys(Key.RETURN);
//  //loop
//   //first row Sonny
//      await driver.findElement(By.xpath("//a[@href='https://www.cleverprogrammer.com/products/profit-with-javascript/categories/2266049']")).sendKeys(Key.RETURN);
//
//     //loop --done
//    let numOfVideos =await driver.findElements(By.xpath("//*[@id='section-category_outline']/div/a"));
//    console.log("numOfvideo", numOfVideos);
//
//    for(let i=1;i<=numOfVideos.length;i++){
//        //19 not run
//        console.log("length",numOfVideos.length);
//    console.log("i",i);
//    //every videos in sonny
//        //*[@id='responsive-video-0"]/iframe
//        await driver.findElement(By.xpath(`//*[@id='section-category_outline']/div/a[${i}]`)).sendKeys(Key.RETURN);
//    await writeContent();
//        await driver.findElement(By.xpath("//a[@href='https://www.cleverprogrammer.com/products/profit-with-javascript/categories/2266049']")).sendKeys(Key.RETURN);
//    }
//    await driver.quit();
// //  await driver.findElement(By.xpath("//a[@href='https://www.cleverprogrammer.com/products/profit-with-javascript/categories/2822313']")).sendKeys(Key.RETURN);
//  };
//
// const writeContent =async ()=>{
//  const title = await driver.findElement(By.className("post-body-title")).getText();
//  console.log("title",title);
//  let pgSrc =await driver.getPageSource();
//  let js = new JSSoup(pgSrc);
//  let result = js.findAll('script','w-json-ld');
//     console.log(result);
//     let retrieveResults = `${title} + \n + ${result[0].nextElement["_text"]} +\n`;
//  console.log("retrieveResults",retrieveResults);
// // await fs.appendFile('cp3.txt', retrieveResults,(err)=>{if(err) console.log(err);});
// }
//
// init();






