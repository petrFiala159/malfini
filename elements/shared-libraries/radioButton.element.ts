import { Page, Locator } from "@playwright/test";
import { BaseElement } from "../base.element";

export class RadioButton extends BaseElement {

    constructor(locator: Locator) {
        super(locator);  // Initialize with the BaseElement constructor
    }

    async setSpecificRadionButton(page:Page, value: string){
        let elem = page.locator(`//*[@type="radio" and @value="${value}"]`)
        await elem.check()
    }

    async checkRadioButton(){
        const radioButton = this.element;
        await radioButton.check()
    }
}


