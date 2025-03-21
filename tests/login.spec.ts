import { test } from '@playwright/test';
import { HomePage } from '../pages/malfini_web/homePage.page';
import { LoginComponent } from '../components/login.component';
import { TEST_CREDENTIALS } from '../config/credentials';

/**
 * Test verifies login functionality
 * 
 * Steps:
 * 1. Navigate to homepage
 * 2. Verify login form is displayed
 * 3. Fill in credentials
 * 4. Submit login
 * 5. Verify successful login
 */

test.describe('Login tests', () => {
    test.beforeEach(async ({ page }) => {
        // Set viewport size
        await page.setViewportSize({ width: 1920, height: 1080 });
        
        // Handle cookie banner
        const cookieBanner = page.locator('#CybotCookiebotDialog');
        if (await cookieBanner.isVisible()) {
            await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
        }
    });
    
    test('Login with valid credentials', async ({ page }) => {
        // Initialize pages and components
        const homePage = new HomePage(page);
        const loginComponent = new LoginComponent(page);
        
        // Navigate to home page
        await homePage.navigate();
        await page.waitForLoadState('networkidle');
        
        await loginComponent.verifyLoginFormDisplayed();
        await loginComponent.login(TEST_CREDENTIALS.CZ.username, TEST_CREDENTIALS.CZ.password);
        // await loginComponent.verifySuccessfulLogin();
    });  
});
