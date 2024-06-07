// tests/test-1.spec.js

import { test, expect } from "@playwright/test";
import {
  clickOnCdGuideLink,
  verifyImportantLinks,
  clickOnCdGuideLinkAndVerifyContent,
} from "../test/test-1a.spec.js";

test("Verify CD Guide link on QA Wolf website", async ({ page }) => {
  // Navigate to QA Wolf website
  await page.goto("https://www.qawolf.com/");

  // Click on the link to the CD Guide
  await clickOnCdGuideLink(page);

  // Verify presence of important links
  await verifyImportantLinks(page);

  // Click on the CD Guide link and verify visibility of target content
  await clickOnCdGuideLinkAndVerifyContent(page);
});
