import { Locator } from "@playwright/test";
import { BaseElement } from "../base.element";
import { TableRow } from "./tableRow.element";

export class table extends BaseElement {

    constructor(locator: Locator) {
        super(locator);
    }

    async getRowByName(name: string) {
        const rowElem = this.element.locator(`tr:has-text("${name}")`); 
        return new TableRow(rowElem);
    }
}