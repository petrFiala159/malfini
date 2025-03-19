import { Locator } from "@playwright/test";

export class BaseElement {
    readonly element: Locator;

    constructor(locator: Locator)
    {
        this.element = locator;
    }
}