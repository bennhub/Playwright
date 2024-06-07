import { test, expect } from '@playwright/test';

test('Verify CD Guide link on QA Wolf website', async ({ page }) => {
  // Navigate to QA Wolf website
  await page.goto('https://www.qawolf.com/');

  // Click on the link to the CD Guide
  await clickOnCdGuideLink(page);

  // Verify presence of important links
  await verifyImportantLinks(page);

  // Click on the CD Guide link and verify visibility of target content
  await clickOnCdGuideLinkAndVerifyContent(page);


});

async function clickOnCdGuideLink(page) {
  await page.locator('div').filter({ hasText: 'QA Wolf is now available on' }).first().click();
  await page.waitForEvent('popup');
  await page.getByRole('link', { name: 'case studies' }).click();
  await page.getByRole('button', { name: 'content arrow to toggle the' }).click();
  await page.getByRole('button', { name: 'content arrow to toggle the' }).click();
}

async function verifyImportantLinks(page) {
  await page.waitForSelector('text=For your reading pleasure');
  await page.waitForSelector('role=link', { name: 'Blog' });
  await page.waitForSelector('role=link', { name: 'Buying guide' });
}

async function clickOnCdGuideLinkAndVerifyContent(page) {
  await page.getByRole('link', { name: 'Guide to CD' }).click();
  await page.waitForSelector('text=the complete and indispensable guide to reaching continuous deployment');
  const guideVisible = await page.locator('text=the complete and indispensable guide to reaching continuous deployment').isVisible();
  
}
