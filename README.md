# Malfini E2E Test Framework

End-to-end testing framework for Malfini e-shop built with Playwright.

## Overview

This framework provides automated testing for the Malfini e-shop using Playwright and TypeScript. It follows the Page Object Model pattern and includes tests for critical user journeys.

## Technology Stack

- Playwright
- TypeScript
- Node.js
- VS Code recommended as IDE

## Project Structure

```
malfini-tests/
├── components/           # Reusable UI components
│   ├── menu.component.ts
│   └── ...
├── pages/               # Page Object Model implementations
│   ├── base.page.ts
│   ├── main.page.ts
│   └── ...
├── tests/              # Test implementations
│   └── malfini_listing_check.spec.ts
└── playwright.config.ts # Playwright configuration
```

## Key Features

- Page Object Model design pattern
- Component-based architecture for reusable elements
- Strong typing with TypeScript
- Automated testing for:
  - Navigation flows
  - Product listings
  - Menu interactions
  - Category browsing

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run tests:
```bash
npx playwright test
```

3. View test report:
```bash
npx playwright show-report
```

## Test Organization

Tests are organized by feature areas:
- Product listing tests
- Navigation tests
- Menu interaction tests

Each test file follows the pattern:
1. Clear test description in JSDoc format
2. Step-by-step test implementation
3. Verification points

## Best Practices

- Use Page Object Model for better maintainability
- Keep selectors in page objects
- Use component abstractions for reusable elements
- Add detailed test descriptions
- Follow TypeScript best practices

## Running Tests

### All Tests
```bash
npx playwright test
```

### Specific Test File
```bash
npx playwright test malfini_listing_check.spec.ts
```

### With UI Mode
```bash
npx playwright test --ui
```

## Contributing

1. Follow the existing code structure
2. Add proper documentation
3. Use TypeScript types
4. Include test descriptions
5. Test your changes thoroughly

## Maintenance

- Update selectors when page structure changes
- Keep page objects synchronized with website updates
- Regular dependency updates
- Monitor test stability

## Debugging

- Use Playwright Inspector
- Check test artifacts in test-results/
- Enable DEBUG=pw:api for detailed logs
- Use trace viewer for failed tests
