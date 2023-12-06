import { test, expect } from '@playwright/test';
//import { test as base } from '@playwright/test';

// const test = base.extend({
//     todoPage: async ({ page }, use) => {
//         console.log("---=======sdfsdf the g  sdf s= = the fizxture", Math.random());
//        await use(page)
//     },
// });

// You can access all the same Fixtures as the test function itself
test.beforeEach(async ({ page }) => {
    console.log("---=======sdfsdf the g  sdf s= = the fizxture", Math.random());
    await page.goto('https://google.com')
})

test('Testing the hooks', async ({ page }) => {
    await page.goto('https://google.com')
    await page.getByLabel('Search', { exact: true }).type('what is chatgpt');
})

test('Testisdfsdfng the hooks', async ({ page }) => {
    await page.goto('https://google.com')
})