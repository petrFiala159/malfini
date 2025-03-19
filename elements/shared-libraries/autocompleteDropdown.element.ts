import { Page, Locator, expect } from "@playwright/test";
import { BaseElement } from "../base.element";
import { generateTown, generateGermanTown } from "../../assets/addresses";
export class AutocompleteDropdown extends BaseElement {
//clear and unify it !!!
    readonly exitIconSelector: string;
    constructor(locator: Locator) {
      super(locator);  // Initialize with the BaseElement constructor
      this.exitIconSelector = '[data-mat-icon-name="x"]'
  }
    // Method to input text and select an option in the autocomplete dropdown by text
    async fillAndSelectOption(page: Page, text: string, searchOption: string) {
        //const autocompleteElem = this.element.getByRole('textbox', { name: `${textBox}`})
        const autocompleteElem = this.element
        await autocompleteElem.click({force: true, clickCount: 2}); // Open the dropdown if necessary
        await autocompleteElem.clear(); //to be sure the field is empty
        await autocompleteElem.fill(text); // Type the text in the input field
        await page.waitForSelector('[role="option"]')
        const option =  page.getByRole('option', { name: `${searchOption}`}).nth(0)
        await expect(option).toBeVisible()
        await option.click()
    }

    async clearAutocomplete() {
       const autocompleteElem = this.element.locator(this.exitIconSelector)
        await autocompleteElem.click(); // Open the dropdown if necessary
    }

    async clearThisElemAutocomplete() {
        const autocompleteElem = this.element
        const autocompleteElemExitIcon = autocompleteElem.locator(this.exitIconSelector);
        await autocompleteElemExitIcon.click(); // Open the dropdown if necessary
    }

    async typeAndSelectOption(page: Page, text: string, searchOption: string) {
        //const autocompleteElem = this.element.getByRole('textbox', { name: `${textBox}`})
        const autocompleteElem = this.element
        await autocompleteElem.click({force: true, clickCount: 2}); // Open the dropdown if necessary
        await autocompleteElem.type(text); // Type the text in the input field
        await page.getByRole('option', { name: `${searchOption}`}).nth(0).click()
        //redundant, fix 
    }

    async typeAndSelectOptionOverlay(page: Page, text: string, searchOption: string) {
        //const autocompleteElem = this.element.getByRole('textbox', { name: `${textBox}`})
        const autocompleteElem = this.element
        await autocompleteElem.click({clickCount: 2, force: true}); // Open the dropdown if necessary
        await autocompleteElem.type(text); // Type the text in the input field
        await page.getByRole('option', { name: `${searchOption}`}).nth(0).click()
        //redundant, fix
    }

     // Method to input text and select an option in the autocomplete dropdown by index
    async addFirstAutocompleteOption(page: Page, text: string) {
        const autocompleteElem = this.element
        await autocompleteElem.click(); 
        await autocompleteElem.type(text); // Fill the text in the input field
        await page.getByRole('option', { name: `${text}`}).nth(0).click()
    }

    async addFirstAutocompleteOptionSByFill(page: Page, text: string) {
        const autocompleteElem = this.element
        await autocompleteElem.click(); // Open the dropdown if necessary
        await autocompleteElem.fill(text); // Fill the text in the input field
        await page.getByRole('option', { name: `${text}`}).nth(0).click()
    }

    async addFirstAutocompleteOptionBySpace(page: Page) {
        const autocompleteElem = this.element
        await autocompleteElem.click(); // Open the dropdown if necessary
        await autocompleteElem.type(" "); // type space because space trigger search for all entities
        const elemOption = page.locator('li').nth(0)
        const optionInnerText = await elemOption.innerText()
        console.log(optionInnerText)
        expect(optionInnerText).not.toContain('Keine Treffer gefunden!')
        await elemOption.click({force: true})
    }

    async addFirstAutocompleteOptionBySpaceByFill(page: Page) {
        const autocompleteElem = this.element
        await autocompleteElem.click(); // Open the dropdown if necessary
        await autocompleteElem.fill(" "); // type space because space trigger search for all entities
        const elemOption = page.locator('li').nth(0)
        const optionInnerText = await elemOption.innerText()
        console.log(optionInnerText)
        expect(optionInnerText).not.toContain('Keine Treffer gefunden!')
        await elemOption.click({force: true})
    }

    async addNextAutocompleteOption(page: Page, text: string, searchOption: string) {
        const autocompleteElem = this.element
        await autocompleteElem.type(text); // Fill the text in the input field
        await page.getByRole('option', { name: `${searchOption}`}).nth(1).click()
    }

    async addFirstDropdownOption(page: Page, text: string) {
        const autocompleteElem = this.element
        await autocompleteElem.type(text); // Fill the text in the input field
        const elemOption = page.locator('li').nth(0)
        const optionInnerText = await elemOption.innerText()
        console.log(optionInnerText)
        expect(optionInnerText).not.toContain('Keine Treffer gefunden!')
        await elemOption.click({force: true})
    }

    async addNthDropdownOption(page: Page, text: string, nth: number) {
        const autocompleteElem = this.element
        await autocompleteElem.type(text); // type the text in the input field
        await page.waitForTimeout(1500)
        await page.getByRole('option').nth(nth).click()
    }

    async fillAutocompleteDropdownByPlaceholder(page: Page, hasPlaceholder: string, text: string, searchOption: string) {
        const autocompleteElem = this.element.getByPlaceholder(hasPlaceholder); 
        await autocompleteElem.click(); // Open the dropdown if necessary
        await autocompleteElem.clear(); //to be sure the field is empty
        await autocompleteElem.fill(text); // Fill the text in the input field
        await page.getByRole('option', { name: `${searchOption}`}).click()
    }

    async fillParameterAutocompleteDropdown(page: Page, text: string, searchOption: string) {
        //const autocompleteElem = this.element.locator(`hasText: ${hasText})`);
        const autocompleteElem = this.element
        await autocompleteElem.click(); // Open the dropdown if necessary
        const parameter = page.getByRole('textbox', { name: 'Parameter' })
        await parameter.clear(); //to be sure the field is empty
        await parameter.fill(text); // Fill the text in the input field
        await page.getByRole('option', { name: `${searchOption}`}).click()
    }

    async expectFieldContains( text: string) {
        const autocompleteElem = this.element
        const textContent = await autocompleteElem.textContent();
        expect(await textContent).toContain(text)
    }    

    async click() {
        const autocompleteElem = this.element
        await autocompleteElem.click()
    }    

    async generateTownAndAddFirstDropdownOption(page: Page) {
        const town = await generateTown()
        const autocompleteElem = this.element
        await autocompleteElem.type(town); // Fill the text in the input field
        const elemOption = page.locator('li').nth(0)
        const optionInnerText = await elemOption.innerText()
        expect(optionInnerText).not.toContain('Keine Treffer gefunden!')
        await elemOption.click({force: true})
    }

    async generateGermanTownAndAddFirstDropdownOption(page: Page):Promise<string> {
        const town = await generateGermanTown()
        const autocompleteElem = this.element
        await autocompleteElem.type(town); // Fill the text in the input field
        const elemOption = page.locator('li').nth(0)
        const optionInnerText = await elemOption.innerText()
        expect(optionInnerText).not.toContain('Keine Treffer gefunden!')
        await elemOption.click({force: true})
        return town
    }

    locator(selectorOrLocator: string | Locator, options?: {
        has?: Locator;
        hasNot?: Locator;
        hasNotText?: string | RegExp;
        hasText?: string | RegExp;
    }): Locator{
        const elem = this.element.locator(selectorOrLocator)
        return elem
    }
    
}
