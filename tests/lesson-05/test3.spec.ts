import { test } from "@playwright/test";

test("Bai 3", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.getByRole("link", { name: "Bài học 3: Todo page" }).click();

  for (let i = 1; i <= 100; i++) {
    await page.getByPlaceholder("Enter a new task").fill(`Todo ${i}`);
    await page.getByRole("button", { name: "Add Task" }).click();
  }

  for (let i = 0; i <= 100; i++) {
    if (i%2 !== 0) {
      const rowLocator = page.getByRole("listitem");
      const deleteButton =  rowLocator
        .filter({ has: page.getByText(`Todo ${i}`, { exact: true }) })
        .getByRole("button", { name: "Delete" });
      page.once("dialog", async (dialog) => {
        await dialog.accept();
        });
      await deleteButton.click();
    
    }
  }
});
