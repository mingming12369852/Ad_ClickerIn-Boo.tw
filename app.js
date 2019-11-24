'use strict';

const puppeteer = require('puppeteer');
const url = "http://boo.tw/1ub7N";
const fs = require('fs');

var frequency;
var proxy_server;

var args = process.argv;
var array = fs.readFileSync(args[2]).toString().split('\n');
console.log("Data Loading Success!!");

frequency = array.length - 1;
Run(frequency);


function Run(x) {

  console.log("-----------------------------------------");
  proxy_server = "--proxy-server=" + array[x];
  console.log("PROXY IP :" + array[x]);
  if (x <= 0) {
    console.log("結束運行");
    process.exit();
  } else {
    console.log("============Remaining " + x + " Times============");
  }

  aaa();
}


async function aaa() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--use-gl=desktop',
      proxy_server
    ]
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080
  });

  try {
    await page.goto(url, {
      timeout: 35000
    });
    await page.waitForSelector('#shorturl-go');
    console.log("Loading in Page01...");

    //Next step....
    await page.waitFor(10000); //delayed sec
    await page.mouse.down();
    await page.mouse.move(155, 933, {
      steps: 493
    });
    await page.mouse.up();
    await page.mouse.move(285, 583);
    await page.waitFor(5000); //delayed


    await page.evaluate(() => {
      document.getElementById("btnCloseP2").click();
      document.getElementById("shorturl-go").click();
    });
    console.log("Page01 OK...");
    //Next step....
    console.log("Loading in Page02...");
    await page.waitFor(10000); //delayed sec
    await page.mouse.down();
    await page.mouse.move(155, 733, {
      steps: 493
    });
    await page.mouse.up();
    await page.mouse.move(285, 583);
    await page.waitFor(5000); //delayed

    await page.evaluate(() => {
      document.getElementById("btnCloseP3").click();
      document.getElementById("shorturl-go").click();
    });
    await page.waitFor(300);
    console.log("Page02 OK...");
    await page.waitFor(700);
    console.log("Successful connection!!");
  } catch (e) {
    console.log("=======ERROR TIME========");
    console.log(e);
    console.log("敘述：連線時間過長、IP已被BAN、" + "I_Am_Not_ARobot" + "。都會使連線失效");
    console.log("=======ERROR TIME========");

  } finally {
    // console.log("關閉連線");
    console.log("CloseLink & EliminateCookie & HistoryRecord...");
    await page.waitFor(500);
    await browser.close();

    frequency--;
    Run(frequency);
  }


}
