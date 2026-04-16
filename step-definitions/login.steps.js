const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { LoginPage } = require('../pages/pages/login.page');
const users = require('../test-data/test-data/users.json');

setDefaultTimeout(60 * 1000);

let browser;
let page;
let loginPage;

Given('user is on the login page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);

  await loginPage.openLoginPage();
});

When('user enters valid credentials', async function () {
  await loginPage.login(
    users.validUser.email,
    users.validUser.password
  );
});

Then('user should see the dashboard', async function () {
  await page.waitForURL(/factor-one|dashboard|sign-in/);
  await browser.close();
});