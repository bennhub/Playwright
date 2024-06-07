import { expect } from '@playwright/test';

export async function clickOnCdGuideLink(page) {
  await page
    .locator("div")
    .filter({ hasText: "QA Wolf is now available on" })
    .first()
    .click();
  await page.waitForEvent("popup");
  await page.getByRole("link", { name: "case studies" }).click();
  await page
    .getByRole("button", { name: "content arrow to toggle the" })
    .click();
  await page
    .getByRole("button", { name: "content arrow to toggle the" })
    .click();
}

export async function verifyImportantLinks(page) {
  await page.waitForSelector("text=For your reading pleasure");
  await page.waitForSelector("role=link", { name: "Blog" });
  await page.waitForSelector("role=link", { name: "Buying guide" });
}

export async function clickOnCdGuideLinkAndVerifyContent(page) {
  await page.click('a:has-text("Guide to CD")');
  await page.waitForSelector('text=the complete and indispensable guide to reaching continuous deployment');
  await expect(page.locator('text=the complete and indispensable guide to reaching continuous deployment')).toBeVisible();
}

  
