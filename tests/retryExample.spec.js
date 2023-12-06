import { test, expect } from '@playwright/test';

test.beforeAll(()=>{
console.log("Before All tests")
})

test("Should be able to test checkboxes 1 ", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByLabel('I have a bike').check();
    await page.evaluate(() => {
        console.log(document.location.href);
    });
})

test("Should be able to test checkboxes 2 ", async ({ page }) => {
    await page.goto('http://localhost:8080');
    //await page.getByLabel('invalid locator').check(); // uncomment this so that it fails
})

test("Should be able to test checkboxes 3 ", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByLabel('I have a bike').check();
})
