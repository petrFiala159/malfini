import { defineConfig, devices  } from '@playwright/test';
import { Env } from './utils/env';

export default defineConfig({
  //timeout: 30000, // Set a global timeout for all tests
  maxFailures: 999, // Set a high number to ensure all tests run
  testDir: './tests',
  //Paraleizace
  fullyParallel: Env.Workers > 1 ? true : false,
  retries: Env.Retries,
  workers: Env.Workers == 0 ? undefined : Env.Workers,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'], // generates HTML report
    ['list'], // shows test results in console
    ['junit', { outputFile: 'test-results/junit-results.xml' }] // generates JUnit XML report
  ],
  outputDir: './test-results', // nastavení vlastního umístění pro reporty
  use: {
    baseURL: Env.HomePageUrl,
    trace: 'on',
  },

  reportSlowTests: {
    max: 5,
    threshold: 15000
  },

  projects: [
    {
        name: 'setupAuthViaUI',
        testMatch: /.*\.setup\.ts/
    },
    {
      name: 'chromium',
        use: {
            ...devices['Desktop Chrome'],
            viewport: { width: 1300, height: 1000 }
        },
        dependencies: ['setupAuthViaUI'],
    }, 
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     storageState: '.auth/state.json',
    //     viewport: { width: 1300, height: 1000 },
    //   },
    //   dependencies: ['setupAuthViaUI'],
    // },
    // {
    //   name: 'webkit', // Playwright's WebKit project represents Safari
    //   use: {
    //     ...devices['Desktop Safari'],
    //     storageState: '.auth/state.json',
    //     viewport: { width: 1300, height: 1000 },
    //   },
    //   dependencies: ['setupAuthViaUI'],
    // },
    // {
    //   name: 'edge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //     storageState: '.auth/state.json',
    //     viewport: { width: 1300, height: 1000 },
    //   },
    //   dependencies: ['setupAuthViaUI'],
    // },
  ],
});
