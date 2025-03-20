/**
 * Test Scenario: Malfini - Listing Check
 * Jira: 
 * Zephyr: 
 *
 * Steps:
 * 1. Navigate to the homepage
 * 2. Check title and URL
 * 3. Navigate to Organic & Recycled section
 */

import { test, expect } from '@playwright/test';
import { Env } from '../utils/env';
import { HomePage } from '../pages/malfini_web/homePage.page';
import { MenuComponent } from '../components/menu.component';
import { OrganicRecycledPage } from '../pages/malfini_web/organicRecycled.page';
import { TshirtsPage } from '../pages/malfini_web/tshirts.page';
import { PoloShirtsPage } from '../pages/malfini_web/poloShirts.page';
import { SweatshirtsPage } from '../pages/malfini_web/sweatshirts.page';
import { FleecePage } from '../pages/malfini_web/fleece.page';
import { LabelFreePage } from '../pages/malfini_web/labelFree.page';
import { NoveltiesPage } from '../pages/malfini_web/novelties.page';
import { OthersPage } from '../pages/malfini_web/others.page';

test.describe('Product listing tests', () => {
  test.beforeEach(async ({ page }) => {
    // Set viewport size
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // Handle cookie banner
    const cookieBanner = page.locator('#CybotCookiebotDialog');
    if (await cookieBanner.isVisible()) {
      await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    }
  });

  test('Check products on all menu pages', async ({ page }) => {
    // Initialize pages and components
    const homePage = new HomePage(page);
    const menu = new MenuComponent(page);
    
    // Navigate to home page
    await homePage.navigate();

    // Check each menu item in order
    // 1. ORGANIC & RECYCLED
    await menu.navigateToOrganicRecycled();
    const organicPage = new OrganicRecycledPage(page);
    await organicPage.verifyProductsAreDisplayed();

    // 2. TSHIRTS
    await menu.navigateToTshirts();
    const tshirtsPage = new TshirtsPage(page);
    await tshirtsPage.verifyProductsAreDisplayed();

    // 3. POLO SHIRTS
    await menu.navigateToPoloShirts();
    const poloShirtsPage = new PoloShirtsPage(page);
    await poloShirtsPage.verifyProductsAreDisplayed();

    // 4. SWEATSHIRTS
    await menu.navigateToSweatshirts();
    const sweatshirtsPage = new SweatshirtsPage(page);
    await sweatshirtsPage.verifyProductsAreDisplayed();

    // 5. FLEECE
    await menu.navigateToFleece();
    const fleecePage = new FleecePage(page);
    await fleecePage.verifyProductsAreDisplayed();

    // 6. LABEL FREE
    await menu.navigateToLabelFree();
    const labelFreePage = new LabelFreePage(page);
    await labelFreePage.verifyProductsAreDisplayed();

    // 7. NOVELTIES
    await menu.navigateToNovelties();
    const noveltiesPage = new NoveltiesPage(page);
    await noveltiesPage.verifyProductsAreDisplayed();

    // 8. OTHERS
    await menu.navigateToOther();
    const othersPage = new OthersPage(page);
    await othersPage.verifyProductsAreDisplayed();
  });
});