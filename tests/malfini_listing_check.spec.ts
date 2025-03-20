/**
 * Test Scenario: Malfini - Listing Check
 * Jira: 
 * Zephyr: 
 *
 * Steps:
 * 1. Navigate to the Personen page.
 *    - Expected Result: Personen page is displayed.
 * 
 */

import { test, expect } from '@playwright/test';
import { Env } from '../utils/env';
import { HomePage } from '../pages/malfini_web/homePage.page';

test.describe('Personen page tests', () => {
  test('Create person', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();

        // Add 10 second wait
        await page.waitForTimeout(10000);
    

    await expect(page).toHaveTitle(/Malfini/);


  });
});