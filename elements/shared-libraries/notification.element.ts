import { Page, Locator, expect } from "@playwright/test";
import { BaseElement } from "../base.element";

export class Notification extends BaseElement {
    readonly locator : Locator
    
    constructor(locator: Locator) {
      super(locator);  // Initialize with the BaseElement constructor
  }    
    async checkNotification(hasText: string) {
        const notification = this.element
        //await expect(notification).toBeVisible()
        await expect(notification).toContainText(`${hasText}`)
    }

    async checkNotificationContent(page: Page, hasText: string) {
        const notification = page.locator('[class="notification__content"]').nth(0)
        //await expect(notification).toBeVisible()
        await expect(notification).toContainText(`${hasText}`)
    }
}