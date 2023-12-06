import { test, expect } from '@playwright/test';

function waitFor(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, seconds * 1000);
    });
}

test("Should be able to mock API request", async ({ page }) => {

    await page.route('https://www.boredapi.com/api/activity', async route => {        
        await route.fulfill({ json: {activity:'Do some rest'} });
    })
    page.on('response', (response) => {console.log(response.body())})

    await page.goto('http://localhost:8080');
    await expect(page.locator('#activity')).toHaveText('Do some rest')
})

