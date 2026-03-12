const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const users = require('../test-data/users.json');

test('User can login to Spark', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage();

  await loginPage.login(users.validUser.email, users.validUser.password);

  await expect(page).toHaveURL(/factor-one/);

});