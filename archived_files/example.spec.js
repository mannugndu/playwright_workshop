// @ts-check
const { test, expect } = require('@playwright/test');

function resolveAfter2Seconds(sec) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve('resolved');
      }, sec * 10);
  });
}

test.describe.configure({ mode: 'parallel' });

test.only('has title', async ({ page }) => {
  test.setTimeout(2000);
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  console.log(1)
  await resolveAfter2Seconds(5000)
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
  console.log(2)
  await resolveAfter2Seconds(5)
});

test('Search something on google', async ({page}) => {
  await page.goto('https://google.com/');
  await page.getByLabel('Search', { exact: true }).type('what is chatgpt');
  await page.getByRole('button', { name: 'Google Search' }).click();
  console.log(3)
  await resolveAfter2Seconds(1)
})

test('Open amazon', async ({page}) => {
  await page.goto('https://amazon.com/');
  console.log(4)
  await resolveAfter2Seconds(4)
})

test('Open Cypress', async ({page}) => {
  await page.goto('https://cypress.io/');
  console.log(5)
  await resolveAfter2Seconds(1)
})
