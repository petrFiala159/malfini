import { Page, expect } from '@playwright/test';
import { Button } from '../elements/shared-libraries/button.element';

export class MenuComponent {
    private page: Page;
    
    // Main menu buttons - změna na public
    public readonly organicRecycledLink: Button;
    public readonly tshirtsLink: Button;
    public readonly poloShirtsLink: Button;
    public readonly sweatshirtsLink: Button;
    public readonly fleeceLink: Button;
    public readonly labelFreeLink: Button;
    public readonly noveltiesLink: Button;
    public readonly otherLink: Button;

    private readonly othersMenu: Button;
    private readonly othersSubmenu: Button;
    private readonly othersSubmenuItems: Button;

    constructor(page: Page) {
        this.page = page;
        console.log('Initializing MenuComponent'); // debug log
        
        // Locators
        this.organicRecycledLink = new Button(page.locator('a.HeaderMenu_DropFull__link[href*="collection=organic-recycled"]'));
        this.tshirtsLink = new Button(page.locator('a.HeaderMenu_DropFull__link[href*="category=t-shirts"]'));
        this.poloShirtsLink = new Button(page.locator('a.HeaderMenu_DropFull__link[href*="category=polo-shirts"]'));
        this.sweatshirtsLink = new Button(page.locator('a.HeaderMenu_DropFull__link[href*="category=sweatshirts"]'));
        this.fleeceLink = new Button(page.locator('a.HeaderMenu_DropFull__link[href*="category=fleece"]'));
        this.labelFreeLink = new Button(page.locator('a.HeaderMenu_DropFull__link[href*="collection=label-free"]'));
        this.noveltiesLink = new Button(page.locator('a.HeaderMenu_DropFull__link[href*="collection=novelties"]'));
        this.otherLink = new Button(page.locator('a.HeaderMenu_DropFull__link[href*="category=other"]'));

        // Update locators with correct class names (double underscores)
        this.othersMenu = new Button(page.locator('.HeaderMenu_Others__link'));
        this.othersSubmenu = new Button(page.locator('.HeaderMenu_Others__wrapper'));
        this.othersSubmenuItems = new Button(page.locator('.HeaderMenu_Others__sub-link'));
    }

    // Explicit public methods
    public async navigateToOrganicRecycled(): Promise<void> {
        await this.organicRecycledLink.click();
    }

    public async navigateToTshirts(): Promise<void> {
        await this.tshirtsLink.click();
    }

    public async navigateToPoloShirts(): Promise<void> {
        await this.poloShirtsLink.click();
    }

    public async navigateToSweatshirts(): Promise<void> {
        await this.sweatshirtsLink.click();
    }

    public async navigateToFleece(): Promise<void> {
        await this.fleeceLink.click();
    }

    public async navigateToLabelFree(): Promise<void> {
        await this.labelFreeLink.click();
    }

    public async navigateToNovelties(): Promise<void> {
        await this.noveltiesLink.click();
    }

    public async navigateToOther(): Promise<void> {
        await this.otherLink.click();
    }

    async hoverOthersMenu(): Promise<void> {
        await this.othersMenu.element.hover();
        // Wait for animation to complete
        await this.page.waitForTimeout(1000);
    }

    async verifyOthersSubmenuItems(): Promise<void> {
        // First check if menu is visible
        await expect(this.page.locator('a.HeaderMenu_Others__sub-link[href*="collection=charity-fashion"]'))
            .toBeVisible({ timeout: 10000 });

        // Log all actual menu items for debugging
        const allLinks = await this.page.locator('a.HeaderMenu_Others__sub-link').all();
        console.log('Found menu items:');
        for (const link of allLinks) {
            const href = await link.getAttribute('href');
            console.log(`- ${href}`);
        }

        const expectedSubmenuItems = [
            'charity-fashion',
            'easy-rebranding',
            'shirts',
            'jackets-vests',
            'organic',
            'recycled',
            'active',
            'army',
            'camouflage',
            'sailor',
            'outdoor',
            'vertex',
            'high-visibility',
            'safety-footwear',
            'trousers-shorts',
            'thermal-underwear',
            'kids-products',
            'caps',
            'bags',
            'terry',
            'accessories',
            'additional-assortment'
        ];

        for (const item of expectedSubmenuItems) {
            await expect(this.page.locator(`a.HeaderMenu_Others__sub-link[href*="${item}"]`))
                .toBeVisible({ timeout: 10000 });
        }
    }

    async verifyOthersSubmenuVisible(): Promise<void> {
        // Check for the specific div class with double underscores
        await expect(this.othersSubmenu.element).toBeVisible({ timeout: 10000 });
    }
}
