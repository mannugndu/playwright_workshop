import { test, expect } from '@playwright/test';


test("Should be able to print a message on network request event ", async ({ page }) => {
    page.on('request', request => {console.log("Network request sent:", request.url())})
    await page.goto('http://localhost:8080');
})

