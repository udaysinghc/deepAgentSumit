import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import{expect} from '@playwright/test'
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(60*1000*2)

Given('User navigate to the application', async function () {
   
  //  browser=await chromium.launch({headless:false})
  //  page=await browser.newPage()

   await pageFixture.page.goto("https://bookcart.azurewebsites.net/")
  });


  
    Given('User click on the login link', async function () {

      await pageFixture.page.locator("//span[text()=' Login ']").click()
     
    });



    Given('User enter username as {string}', async function (username) {
     
      await pageFixture.page.locator("[placeholder='Username']").fill(username)
    });



    Given('User enter password as {string}', async function (password) {

      await pageFixture.page.locator("[placeholder='Password']").fill(password)
     
    });



    When('User click on the login button', async function () {

      await pageFixture.page.locator("[class*='mdc-button mdc-button--raised mat-mdc-raised-button mat-p']").click()
     
    });



    Then('Login should be success', async function () {
     
      const text=await pageFixture.page.locator("(//span[@class='mdc-button__label']/span)[1]").textContent()
      console.log(text)
  
    });

      Then('Login should be fail', async function () {
      
         const regButton=await pageFixture.page.locator("//span[text()='Register']")
         await expect(regButton).toBeVisible()
         
      });    