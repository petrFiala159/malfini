import { Page, Locator, expect } from "@playwright/test";

export class Tooltip{
    element: Locator;

    constructor()
    {
        this.element;
    } 

    async expectTooltipIsVisible(page: Page) {
        const tooltipElem = page.locator('[]')
        await expect(tooltipElem).toBeVisible()
    }
}