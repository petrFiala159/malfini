/**
 * Page: Google page
 * Screenshot: // [../../screenshots/google.png]
 * Description: google page :).
 */
import { Page, Locator, expect } from '@playwright/test';
import { Env } from '../../utils/env';
import { BasePage } from '../base.page';
import { Button } from '../../elements/shared-libraries/button.element';


export class HomePage implements BasePage {
    readonly page: Page;


    // Main page elements
    readonly createPersonButton: Button; // Create person button (Person erstellen)
    readonly popupSaveButton: Button; // Save button (Speichern)
    readonly cancelButton: Button; // Cancel button (Abbrechen)


    constructor(page: Page) {
        this.page = page;

        this.createPersonButton = new Button(page.getByRole('button', { name: 'Person erstellen' }))
        // Buttons
        this.popupSaveButton = new Button(page.locator('[data-cy="child-create-save-button"]'));
        this.cancelButton = new Button(page.locator("xpath=//button[starts-with(@id, 'control_cancel_')]")); // Cancel button (Abbrechen)
    }

    async navigate() {
        console.log("HomePageUrl:", Env.HomePageUrl);
        await this.page.goto(Env.HomePageUrl);
        await expect(this.page).toHaveURL(`${Env.HomePageUrl}`)
    }
    

}