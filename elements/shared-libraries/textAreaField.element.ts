import { Page, Locator } from "@playwright/test";
import { BaseElement } from "../base.element";

export class TextAreaField extends BaseElement {

    constructor(locator: Locator) {
      super(locator);  // Initialize with the BaseElement constructor
  }
    // Method to input text and select an option in the autocomplete dropdown by index
    async typeText(text: string ) {
        const autocompleteElem = this.element
        await autocompleteElem.click(); // Open the dropdown if necessary
        await autocompleteElem.type(text); // Type the text in the input field
    }

    async fillText(text: string ) {
        const autocompleteElem = this.element
        await autocompleteElem.click(); // Open the dropdown if necessary
        await autocompleteElem.fill(text); // Type the text in the input field
    }

    async clear() {
        const autocompleteElem = this.element
        await autocompleteElem.clear()
    }
}
