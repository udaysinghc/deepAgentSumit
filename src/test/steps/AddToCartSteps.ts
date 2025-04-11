import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from '@playwright/test'
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(60*1000*2)
Given('User search for a {string}', async function (book: string) {
  await pageFixture.page.locator("[type='search']").fill(book);
  await pageFixture.page.locator("[class='mdc-list-item__primary-text']").click()
});

When('User add the book to the cart', async function () {
  await pageFixture.page.locator("//a[@class='mat-mdc-tooltip-trigger']/../descendant::span[@class='mdc-button__label']").click();
});

Then('the cart badge should get updated', async function () {
  await pageFixture.page.waitForTimeout(2000);
  const badge = await pageFixture.page.locator('#mat-badge-content-0').textContent();
  expect(Number(badge)).toBeGreaterThan(0);
});