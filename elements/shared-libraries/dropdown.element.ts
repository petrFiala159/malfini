import { Page, Locator, expect } from "@playwright/test";
import { BaseElement } from "../base.element";

export class Dropdown extends BaseElement {

    constructor(locator: Locator) {
      super(locator);  // Initialize with the BaseElement constructor
  }
    // Method to input text and select an option in the autocomplete dropdown by index
    async selectDropdownOption(page: Page, searchOption: string) {
        //const elem = this.element.filter({ hasText: `${hasText}` }) 
        const elem = this.element
        await elem.click(); // Open the dropdown if necessary
        await page.getByRole('option', { name: `${searchOption}`, exact: true }).click()
    }

    async selectDropdownOptionSensoric(page: Page, hasText: string, searchOption: string) {
        const elem = this.element.filter({ hasText: `${hasText}` })
        await elem.click(); // Open the dropdown if necessary
        await page.getByRole('option', { name: `${searchOption}`, exact: true }).click()
    }

    async returnSelectedOption():Promise<string>{
        return await this.element.innerText()
    }

    async selectFirstDropdownOption(page: Page) {
        const autocompleteElem = this.element
        await autocompleteElem.click(); // Open the dropdown if necessary
        await page.getByRole('option').nth(0).click()
    }

    async expectDropdownIsVisible(){
        expect(this.element).toBeVisible({visible: true})
    }   

}
