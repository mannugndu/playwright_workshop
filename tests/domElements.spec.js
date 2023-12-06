import { test, expect } from '@playwright/test';

test("Should be able to test checkboxes", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByLabel('I have a bike').check();
    await expect(page.getByLabel('I have a bike')).toBeChecked(); // Assertion
    await page.getByLabel('I have a bike').uncheck();
    await expect(page.getByLabel('I have a bike')).not.toBeChecked(); // Assertion
    await page.getByRole('checkbox', { name: "I have a car" }).setChecked(true);
    await page.getByRole('checkbox', { name: "I have a car" }).setChecked(false);
    await page.pause();
})

test("Should be able to test radio buttons", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByLabel('HTML').check();
    await page.pause();
})

test("Should be able to test select options", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByLabel('Choose a car:').selectOption(['volvo', 'audi']);
    await page.pause();
})

test("Should be able to select a file to upload", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.locator('#myFile').setInputFiles('uploadFile.csv');
    await page.pause();
})