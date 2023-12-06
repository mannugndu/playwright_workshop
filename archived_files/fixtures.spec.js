import { test as base, expect, chromium } from '@playwright/test';

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 5000);
    });
}

const test = base.extend({
    googlePage: async ({ page }, use) => {
       await use(page)
    },
});

test('Writing test without fixtures', async () => {
    const browser = await chromium.launch(); // Browser application
    const context = await browser.newContext(); // Isolated browsing session within the browser (generally a different window)
    //const context2 = await browser.newContext();
    //const page3 = await context2.newPage();
    const page = await context.newPage(); // Page to render the DOM elements and provide the mechanism to interact with the elements
    const page2 = await context.newPage();

    await page2.goto('https://www.google.com')
    await page.goto('https://www.amazon.in');

    await resolveAfter2Seconds();
})

test('with fixtures', async ({googlePage}) => {
    await googlePage.goto('https://www.google.com')
})