import { Locator } from "@playwright/test";
import { BaseElement } from "../base.element";
import { OgdTableRow } from "./ogdTableRow.element";

export class OgdTable extends BaseElement {

    constructor(locator: Locator) {
        super(locator);
    }

    async getRowByName(name: string) {
        const rowElem = this.element.locator(`tr:has-text("${name}")`); 
        return new OgdTableRow(rowElem);
    }
}