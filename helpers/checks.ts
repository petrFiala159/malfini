import { Page } from "@playwright/test";
import { Env } from "../utils/env";

export async function checkNthColumnText(page:Page, nth: number, selector: string, searchText: string): Promise<boolean[]> {
    const results = await page.$$eval(`${selector} >> tr >> td:nth-child(${nth + 1})`, (cells, searchText) => {
      return cells.map(cell => {
        // Log the text content of each cell for debugging
        console.log(`Checking cell with content: '${cell.textContent.trim()}'`);
        return cell.textContent.includes(searchText);
      });
    }, searchText);

    return results;
}

  