import { Page, Locator, expect } from "@playwright/test";
import { BaseElement } from '../base.element';

export class Button  extends BaseElement  {
    constructor(locator: Locator)
    {
        super(locator);  // Initialize with the BaseElement constructor
    }

    async click(options?: {
        button?: "left" | "right" | "middle";
        clickCount?: number;
        delay?: number;
        force?: boolean;
        modifiers?: Array<"Alt" | "Control" | "Meta" | "Shift">;
        noWaitAfter?: boolean;
        position?: {
            x: number;
            y: number;
        };
        timeout?: number;
        trial?: boolean;
    }): Promise<void>{
        await this.element.click(options)
    }

    async clickByForce(){
        await this.element.click({clickCount: 2, force: true, timeout: 1000})
    }

    async buttonIsEnabled(){
        await this.element.isEnabled()
    }

    async expectButtonIsEnabled(){
        expect(this.element).toBeEnabled()
    }

    async buttonIsDisabled(){
        await this.element.isDisabled()
    }

    async expectButtonIsDisabled(){
        expect(this.element).toBeDisabled()
    }

    async expectButtonIsVisible(){
        expect(this.element).toBeVisible({visible: true})
    }    

    async expectButtonIsNotVisible(){
        expect(this.element).toBeVisible({timeout: 1000, visible: false})
    }    

    async returnTextOnButton(): Promise<string>{
        return (await this.element.innerText()).toString()
    }

    async checkTextOnButton(expectedText: string){
        expect(this.element).toHaveText(expectedText)
    }
    async expectCount(expectedCountOfElements: number){
        expect(this.element).toHaveCount(expectedCountOfElements)
    }

    async nth(nth: number){
        const nthElem = this.element.nth(nth);
        return nthElem
    }

    async getAttributeStyle(){
        const style = this.element.getAttribute('style');
        return style
    }
}
