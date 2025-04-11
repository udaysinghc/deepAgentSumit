import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import{Page, Browser, chromium, expect, BrowserContext} from '@playwright/test'
import { pageFixture } from "./pageFixture";

let browser:Browser
let page:Page
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });
});

Before(async function (){
    context=await browser.newContext()
    page=await context.newPage()
    pageFixture.page = page
})

After(async function({pickle,result}) {

  if(result?.status==Status.FAILED)
  {
     //Screen Shot:-
     const img=await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`, type:'png' });

     await this.attach(img, 'image/png')
  }
 
    await pageFixture.page.close()
    await context.close()
  
})

AfterAll(async function() {
  await browser.close()
});