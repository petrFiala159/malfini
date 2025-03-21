import { Page } from '@playwright/test';
import { BasePage } from '../base.page';
import { Env } from '../../utils/env';

/**
 * Page object representing the product detail page
 * Contains methods for verifying product information and elements
 */
export class ProductDetailPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    /**
     * Verifies that the product detail page shows correct information
     * @param expectedProductName - Expected product name (e.g. "Factor 852")
     */
    async verifyProductDetail(expectedProductName: string): Promise<void> {
        // Wait for page load and product info to be visible
        await this.page.waitForLoadState('networkidle');

        // Verify the product heading contains expected text
        const productHeading = this.page.getByRole('heading', { level: 1 });
        await expect(productHeading).toBeVisible();
        await expect(productHeading).toContainText(expectedProductName);
        
        // Verify product code is displayed (e.g. "852")
        const productCode = expectedProductName.match(/\d+/)?.[0] || '';
        await expect(
            this.page.getByText(productCode, { exact: true })
        ).toBeVisible();

        // Verify product image is present
        const productImage = this.page.locator('img[alt*="Factor"]').first();
        await expect(productImage).toBeVisible();
        const imageSrc = await productImage.getAttribute('src');
        expect(imageSrc).toBeTruthy();

        // Verify product detail section exists
        const detailSection = this.page.locator('.product-detail');
        await expect(detailSection).toBeVisible();
    }
}
