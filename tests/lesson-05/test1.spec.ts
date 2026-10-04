import { test, expect } from "@playwright/test";

test("Bai 1", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.getByRole("link", { name: "Bài học 1: Register Page (có đủ các element)" }).click();
  await page.getByLabel("username").fill("Nguyen Van An");
  await page.getByLabel("Email").fill("Antest@gmail.com");
  await page.getByRole("radio", { name: "Female" }).check();
  await page.getByRole("checkbox", { name: "Reading" }).check();
  await page.getByLabel("Interests").selectOption("Music");
  await page.getByLabel("Country").selectOption("Australia");
  await page.getByLabel("Date of Birth:").fill("1999-08-14");
  await page.getByLabel("Profile Picture").setInputFiles("./tests/lesson-05/test.png");
  await page.getByLabel("Biography").fill(
      "Nguyen Van An is a dedicated software professional with over five years of experience in the IT industry, specializing in quality assurance and process optimization. He continuously leverages new technologies and refined workflows to ensure high-standard product delivery. Driven by a commitment to professional growth, he is actively advancing his skill set to transition into project management.",
    );
    await page.getByRole("button", {name: "Register"}).click();
});
