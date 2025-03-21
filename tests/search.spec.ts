import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/malfini_web/homePage.page';
import { ProductDetailPage } from '../pages/malfini_web/product.detail.page';

/**
 * Product search test verifies that:
 * 1. User can search for a specific product
 * 2. Search shows product in dropdown
 * 3. Product detail page displays correct information
 */

// Define test parameters
const SEARCH_TEXT = 'Factor 852';

/**
 * Test verifies product search functionality
 * 
 * Steps:
 * 1. Navigate to homepage
 * 2. Enter product name in search field
 * 3. Verify product appears in dropdown
 * 4. Verify product details in dropdown are correct
 */
test.describe('Search test', () => {
  test.beforeEach(async ({ page }) => {
    // Set viewport size
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // Handle cookie banner
    const cookieBanner = page.locator('#CybotCookiebotDialog');
    if (await cookieBanner.isVisible()) {
      await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    }
  });

  test('Search for specific product and verify detail page', async ({ page }) => {
    // Initialize page objects and components
    const homePage = new HomePage(page);
    const productDetailPage = new ProductDetailPage(page);
    
    // Step 1: Navigate to homepage
    await homePage.navigate();
    
    // Step 2: Search for product and verify dropdown results
    // This uses the autocomplete component to enter text and verify dropdown
    await homePage.fillAndSelectOption(SEARCH_TEXT, SEARCH_TEXT);
    
    // Step 3: Verify product detail page content
    // Checks that correct product is displayed with all required elements
    await productDetailPage.verifyProductDetail(SEARCH_TEXT);
  });
});
