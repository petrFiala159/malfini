import { Page, expect } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async verifyProductsAreDisplayed(): Promise<void> {
        // Handle cookie consent if present
        const cookieDialog = this.page.getByRole('dialog', { name: 'This website uses cookies' });
        if (await cookieDialog.isVisible()) {
            await this.page.getByRole('button', { name: 'Allow all' }).click();
            await expect(cookieDialog).not.toBeVisible();
        }

        // Simply wait for any product link containing an image to appear
        await expect(
            this.page.locator('a', { 
                has: this.page.locator('img'),
                hasText: /[0-9]+/
            }).first()
        ).toBeVisible({ timeout: 30000 });
    }
}