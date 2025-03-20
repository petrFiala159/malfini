import { Locator } from "@playwright/test";
import { BaseElement } from "../base.element";

export class OgdTableRow extends BaseElement {
    readonly nameCell: Locator;
    readonly statusCell: Locator;

    constructor(locator: Locator) {
        super(locator);
        this.nameCell = this.element.locator(".//td[2]//span");
        this.statusCell = this.element.locator(".//td[6]//div[contains(@class, 'badge__content')]")
    }

    async open() {
        await this.element.click();
    }
}