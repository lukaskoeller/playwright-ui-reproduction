import { test, expect } from '@playwright/test';

test('can increment counter', async ({ page }) => {
  await page.goto('/');

  const btn = page.getByRole('button');

  await btn.click();
  await btn.click();
  await btn.click();
  await expect(btn).toHaveText('count is 3');
});
