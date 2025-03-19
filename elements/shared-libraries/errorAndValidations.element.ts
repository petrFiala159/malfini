import { Page, Locator, expect } from "@playwright/test";

export class Error{
    element: Locator;

    constructor()
    {
        this.element;
    } 

    async expectNoErrors(page: Page) {
        const errorInput = page.locator('[class="input-value-container error"]')
        const errorDropdown = page.locator('[class="dropdown__input dropdown-no__chevron error"]')
        const errorDatePicker = page.locator('[class="calendar__input error"]')
        const errorInputCount = await errorInput.count()
        const errorDropdownCount = await errorDropdown.count()
        const errorDatePickerCount = await errorDatePicker.count()
        expect(errorInputCount).toEqual(0)
        expect(errorDropdownCount).toEqual(0)
        expect(errorDatePickerCount).toEqual(0)
    }

    async getAutocompleteErrorMessageByFieldLabel(page:Page, label: string, nth?: number): Promise<string>{
        let number = 0
        if(nth !== undefined){
            number = nth
        }
        const autocompleteSearchElem = page.locator(`ogd-autocomplete-search[label="${label}"]`);
        const errorMessage = autocompleteSearchElem.locator('[class="ogd-text-sm-regular-error-500 mt-0.5 ng-star-inserted"]').nth(number).innerText()
        console.log(await errorMessage)
        return await errorMessage
    }

    async getCalendarErrorMessageByFieldLabel(page:Page, label: string, nth?: number): Promise<string>{
        let number = 0
        if(nth !== undefined){
            number = nth
        }
        const autocompleteSearchElem = page.locator(`ogd-calendar[label="${label}"]`)
        const errorMessage = autocompleteSearchElem.locator('[class="ogd-text-sm-regular-error-500 mt-0.5 ng-star-inserted"]').nth(number).innerText()
        console.log(await errorMessage)
        return await errorMessage
    }

    async getInputErrorMessageByFieldLabel(page:Page, label: string, nth?: number): Promise<string>{
        let number = 0
        if(nth !== undefined){
            number = nth
        }
        const autocompleteSearchElem = page.locator(`ogd-input[label="${label}"]`)
        const errorMessage = autocompleteSearchElem.locator('[class="ogd-text-sm-regular-error-500 mt-0.5 ng-star-inserted"]').nth(number).innerText()
        console.log(await errorMessage)
        return await errorMessage
    }

    async getNumberInputErrorMessageByFieldLabel(page:Page, label: string, nth?: number): Promise<string>{
        let number = 0
        if(nth !== undefined){
            number = nth
        }
        const autocompleteSearchElem = page.locator(`ogd-input-number[label="${label}"]`)
        const errorMessage = autocompleteSearchElem.locator('[class="ogd-text-sm-regular-error-500 mt-0.5 ng-star-inserted"]').nth(number).innerText()
        console.log(await errorMessage)
        return await errorMessage
    }

    async checkAutocompleteHasErrorClass(page:Page, label: string){
        const autocompleteSearchElem = page.locator(`ogd-autocomplete-search[label="${label}"]`);
        const errorClass = autocompleteSearchElem.locator('.error')
        const errorCount = errorClass.count()
        console.log(await errorCount)
        expect(await errorCount).toBeGreaterThanOrEqual(1)
    }

    async checkCalendarHasErrorClass(page:Page, label: string){
        const autocompleteSearchElem = page.locator(`ogd-calendar[label="${label}"]`);
        const errorClass = autocompleteSearchElem.locator('.error')
        const errorCount = errorClass.count()
        console.log(await errorCount)
        expect(await errorCount).toBeGreaterThanOrEqual(1)
    }

    async checkInputHasErrorClass(page:Page, label: string){
        const autocompleteSearchElem = page.locator(`ogd-input[label="${label}"]`);
        const errorClass = autocompleteSearchElem.locator('.error')
        const errorCount = errorClass.count()
        console.log(await errorCount)
        expect(await errorCount).toBeGreaterThanOrEqual(1)
    }

    async checkNumberInputHasErrorClass(page:Page, label: string){
        const autocompleteSearchElem = page.locator(`ogd-input-number[label="${label}"]`);
        const errorClass = autocompleteSearchElem.locator('.error')
        const errorCount = errorClass.count()
        console.log(await errorCount)
        expect(await errorCount).toBeGreaterThanOrEqual(1)
    }

    async checkElementErrorClass(page:Page, selector: string){
        const elem = page.locator(selector);
        // Check if the element has the class 'error'
        const hasErrorClass = await elem.evaluate(el => el.classList.contains('error'));
        expect(hasErrorClass).toBeTruthy()
    }
}