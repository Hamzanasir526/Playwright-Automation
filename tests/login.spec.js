const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/pages/login.page');
const users = require('../test-data/test-data/users.json');

test('User can login to Spark', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage();
  await loginPage.login(users.validUser.email, users.validUser.password);

  await expect(page).not.toHaveURL(/sign-in/);
});