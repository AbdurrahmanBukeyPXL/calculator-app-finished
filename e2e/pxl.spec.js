const { test, expect } = require('@playwright/test');

test('PXL site', async ({ page }) => {
  await page.goto('https://www.pxl.be/');
  await expect(page.getByText('Socials')).toBeVisible();
  await page.getByRole('link', { name: 'sid-in' }).click();
  await expect(page).toHaveTitle('Studie-informatiedagen (SID-in) | Hogeschool PXL');
  await expect(page.getByText('Sid-in Genk')).toBeVisible();
  await page.getByText('Sid-in Genk').first().click();
  await expect(page.getByText('Zaterdag 31 januari 2026')).toBeVisible();
});
