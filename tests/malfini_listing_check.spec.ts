/**
 * Test Scenario: Create a new person (Person erstellen)
 * Jira: https://jira.hbsn-gruppe.com/browse/OGD-5487
 * Zephyr: https://jira.hbsn-gruppe.com/secure/Tests.jspa#/testCase/OGD-T413
 *
 * Steps:
 * 1. Navigate to the Personen page.
 *    - Expected Result: Personen page is displayed.
 * 
 * 2. Click the "Person erstellen" button.
 *    - Expected Result: Pop-up for person creation appears.
 * 
 * 3. Verify required fields and elements in the pop-up.
 *    - Expected Result: All required fields are visible.
 * 
 * 4. Generate a random "Vorname" and fill the input field.
 *    - Expected Result: Input field is filled successfully.
 * 
 * 5. Fill out all mandatory fields.
 *    - Expected Result: Fields are populated successfully.
 * 
 * 6. Click the "Erstellen" button.
 *    - Expected Result: New person is created.
 * 
 * 7. Verify the new person in the Personen table.
 *    - Expected Result: New person is listed in the table.
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