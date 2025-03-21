import { Page, expect } from '@playwright/test';
import { LOGIN_BUTTON_LABELS, MY_ACCOUNT_LABELS } from '../assets/translations';

export class LoginComponent {

    private readonly page: Page;
    private readonly usernameInput = '#username';
    private readonly passwordInput = '#password';

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Gets login button using translations
     * Matches any of the supported language variants
     */
    private getLoginButton() {
        const buttonTexts = LOGIN_BUTTON_LABELS.join('|');
        return this.page.getByRole('button', { 
            name: new RegExp(`^(${buttonTexts})$`) 
        });
    }

    private getMyAccountLink() {
        const accountTexts = MY_ACCOUNT_LABELS.join('|');
        return this.page.getByRole('link', { 
            name: new RegExp(`^(${accountTexts})$`) 
        });
    }
    

    /**
     * Performs login with provided credentials
     * @param username - email or login
     * @param password - user password
     */
    async login(username: string, password: string): Promise<void> {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        
        const loginButton = this.getLoginButton();
        await expect(loginButton).toBeVisible({ timeout: 5000 });
        await loginButton.click();
        
        await this.page.waitForLoadState('networkidle');
    }

    async verifySuccessfulLogin(): Promise<void> {
        const myAccountLink = this.getMyAccountLink();
        await expect(myAccountLink).toBeVisible({ timeout: 10000 });
    }

    async verifyLoginFormDisplayed(): Promise<void> {
        await this.page.locator(this.usernameInput).waitFor({ state: 'visible' });
        await this.page.locator(this.passwordInput).waitFor({ state: 'visible' });
        await expect(this.getLoginButton()).toBeVisible();
    }
}
