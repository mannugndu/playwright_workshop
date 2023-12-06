import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByText('Mow your lawn').click();
  await expect(page.locator('#activity')).toContainText('Mow your lawn');
});