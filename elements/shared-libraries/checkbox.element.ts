import { Page, Locator, expect } from "@playwright/test";
import { BaseElement } from "../base.element";

export class Checkbox extends BaseElement {

    constructor(locator: Locator) {
        super(locator);  // Initialize with the BaseElement constructor
    }

    async check(){
        const elem = this.element;
        await elem.check()
    }

    async isChecked(){
        const elem = this.element;
        await expect(elem).toBeChecked({checked: true})    
    }

    async isNotChecked(){
        const elem = this.element;
        await expect(elem).toBeChecked({checked: false})    
    }

    async clickOnTextWithCheckbox(){
        const elem = this.element;
        await elem.click()
    }

    async expectCheckboxIsVisible(){
        expect(this.element).toBeVisible({visible: true})
    }  
}


