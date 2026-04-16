class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailField = '#identifier-field';
    this.passwordField = '#password-field';
    this.continueButton = 'button.cl-formButtonPrimary';
  }

async openLoginPage() {
  await this.page.goto(`${process.env.BASE_URL}/sign-in`);
}

  async login(email, password) {
    await this.page.fill(this.emailField, email);
    await this.page.click(this.continueButton);
    await this.page.locator(this.passwordField).waitFor({ state: 'visible' });
    await this.page.locator(this.passwordField).fill(password);
    await this.page.click(this.continueButton);
  }
}

module.exports = { LoginPage };