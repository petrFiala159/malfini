import { Page } from '@playwright/test';
import { BasePage } from '../base.page';

export class FleecePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async verifyPage(): Promise<void> {
        await this.verifyProductsAreDisplayed();
    }
}
