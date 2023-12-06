import { test, expect, devices } from '@playwright/test'

test('should test getBy methods', async ({ page }) => {
   
    await page.goto('http://localhost:8080');
    await page.getByLabel("username").fill("Username")
    await page.getByLabel('password').fill("Password")

    await page.getByPlaceholder('type your email').fill("example@abc.com")
    await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
    await page.getByRole('checkbox', { name: 'Subscribe' }).check();
    await page.getByRole('button', { name: /Submit/i }).click();
    await page.getByTestId('click-me').click();
    await page.getByText('click me!').click();
    await page.getByText('Click Me!', {exact: true}).click();
    await expect(page.getByTitle('heading')).toHaveText('PlayWright Demo DOM')
    
})