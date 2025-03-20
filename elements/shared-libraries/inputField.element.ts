import { Page, Locator, expect } from "@playwright/test";
import { BaseElement } from "../base.element";

export class InputField extends BaseElement {

    constructor(locator: Locator) {
      super(locator);  // Initialize with the BaseElement constructor
  }
    async fillText(text: string) {
        const autocompleteElem = this.element
        await autocompleteElem.click(); // Open the dropdown if necessary
        await autocompleteElem.fill(text); // Type the text in the input field
    }

    async typeText(text: string) {
        const autocompleteElem = this.element
        await autocompleteElem.click(); // Open the dropdown if necessary
        await autocompleteElem.type(text); // Type the text in the input field
    
    }

    async onlyNumericValueValidation(page: Page){    
        await page.mouse.click(10, 10);    
        await this.element.getByText("Nur Nummer").isVisible()
    }

    async clear() {
        const autocompleteElem = this.element
        await autocompleteElem.clear()
    }

    async click() {
        const autocompleteElem = this.element
        await autocompleteElem.click()
    }

    async clearNotInput(page:Page) {
        const autocompleteElem = this.element
        await autocompleteElem.click({ clickCount: 3 }); // Triple click to select all text inside
        await page.keyboard.press('Backspace'); // Delete the selected text
    }
    async textContent(): Promise<null | string>{
        return await this.element.innerText()
    }

    async getAttribute(name: string, options?: { timeout?: number; }): Promise<string>{
        const attribute = await this.element.getAttribute(name, options) ?? '';
        return attribute;
    }
    async expectToBeDisabled(){
        const elem = this.element
        await expect(elem).toBeDisabled();
    }

    async expectAllDisabled(){
        const elem = this.element;
        // Evaluate if all elements are disabled and store the result
        const areAllDisabled = await elem.evaluateAll(elements => elements.every(element => element.hasAttribute('disabled')));
        // Assert that all elements are disabled
        expect(areAllDisabled).toBe(true);
    }

    async expectAllEnabled() {
        const elem = this.element;
        // Evaluate if all elements are enabled (do not have the 'disabled' attribute)
        const areAllEnabled = await elem.evaluateAll(elements => elements.every(element => !element.hasAttribute('disabled')));
        // Assert that all elements are enabled
        expect(areAllEnabled).toBe(true);
    }

    async expectFieldIsVisible(){
        expect(this.element).toBeVisible({visible: true})
    }    
    
}
