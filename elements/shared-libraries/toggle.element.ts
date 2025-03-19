import { Page, Locator, expect } from "@playwright/test";
import { BaseElement } from "../base.element";

export class Toggle extends BaseElement {

    constructor(locator: Locator) {
        super(locator);  // Initialize with the BaseElement constructor
    }

    async click(){
        const elem = this.element;
        await elem.click()
    }

}


