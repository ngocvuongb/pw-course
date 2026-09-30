import { test, expect } from "@playwright/test";

test("Bai 2", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.getByRole("link", { name: "Bài học 2: Product page" }).click();
  await page.locator('xpath=//button[@data-product-id="1"]').dblclick();
  await page.locator('xpath=//button[@data-product-id="2"]').click({clickCount : 3});
  await page.locator('xpath=//button[@data-product-id="3"]').click();
});
