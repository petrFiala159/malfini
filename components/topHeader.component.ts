import { Page } from '@playwright/test';
import { Button } from '../elements/shared-libraries/button.element';

export class TopHeaderComponent {
    private page: Page;
    
    // Top header buttons
    readonly languageSelector: Button;
    readonly servicesLink: Button;
    readonly downloadLink: Button;
    readonly priceListLink: Button;
    readonly aboutUsLink: Button;
    readonly printingEmbroideryLink: Button;
    readonly contactsLink: Button;
    readonly transportLink: Button;

    constructor(page: Page) {
        this.page = page;
        
        // Initialize buttons
        this.languageSelector = new Button(page.locator('text=Language'));
        this.servicesLink = new Button(page.getByRole('link', { name: 'Services' }));
        this.downloadLink = new Button(page.getByRole('link', { name: 'Download' }));
        this.priceListLink = new Button(page.getByRole('link', { name: 'Price list' }));
        this.aboutUsLink = new Button(page.getByRole('link', { name: 'About us' }));
        this.printingEmbroideryLink = new Button(page.getByRole('link', { name: 'Printing and Embroidery' }));
        this.contactsLink = new Button(page.getByRole('link', { name: 'Contacts' }));
        this.transportLink = new Button(page.getByRole('link', { name: 'Transport' }));
    }

    async changeLanguage(language: string): Promise<void> {
        await this.languageSelector.click();
        await this.page.getByRole('link', { name: language }).click();
    }

    async navigateToServices(): Promise<void> {
        await this.servicesLink.click();
    }

    async navigateToDownload(): Promise<void> {
        await this.downloadLink.click();
    }

    async navigateToPriceList(): Promise<void> {
        await this.priceListLink.click();
    }

    async navigateToAboutUs(): Promise<void> {
        await this.aboutUsLink.click();
    }

    async navigateToPrintingEmbroidery(): Promise<void> {
        await this.printingEmbroideryLink.click();
    }

    async navigateToContacts(): Promise<void> {
        await this.contactsLink.click();
    }

    async navigateToTransport(): Promise<void> {
        await this.transportLink.click();
    }
}
