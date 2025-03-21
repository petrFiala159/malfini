/**
 * Page: HomePage
 * Screenshot: // [../../screenshots/homepage.png]
 * Description: HomePage of Malfini webpage.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../base.page';
import { Env } from '../../utils/env';
import { AutocompleteDropdown } from '../../elements/shared-libraries/autocompleteDropdown.element';

export class HomePage extends BasePage {
    readonly AutocompleteDropdown : AutocompleteDropdown;

    constructor(page: Page) {
        super(page);
        
        //Locators
        this.AutocompleteDropdown = new AutocompleteDropdown(page.locator('#search'));

    }

    async navigate(): Promise<void> {
        await this.page.goto(Env.BasePageUrl);
    }

    async fillAndSelectOption(textBox: string, text: string, searchOption: string) {
        await this.AutocompleteDropdown.fillAndSelectOption(text, searchOption);
    }
}

