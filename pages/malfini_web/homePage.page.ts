/**
 * Page: HomePage
 * Screenshot: // [../../screenshots/homepage.png]
 * Description: HomePage of Malfini webpage.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../base.page';
import { Env } from '../../utils/env';

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigate(): Promise<void> {
        await this.page.goto(Env.BasePageUrl);
    }
}