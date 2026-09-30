import { test } from "@playwright/test";

test("Bai 4", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.getByRole("link", { name: "Bài học 4: Personal notes" }).click();
    var notes = [
        {
            action: "click",
            description: "Hàm click dùng để thực hiện click vào các phần tử trên trang web"
        },
        {
            action: "fill",
            description: "Hàm fill dùng để điền văn bản vàp các trường input hoặc textarea trên trang web"
        },
        {
            action: "type",
            description: "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng"
        },
        {
            action: "hover",
            description: "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoặc các hiện ứng hover"
        },
        {
            action: "check",
            description: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked"
        },
        {
            action: "uncheck",
            description: " Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked"
        },
        {
            action: "selectOption",
            description:"Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown"
        },
        {
            action: "press",
            description: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác"
        },
        {
            action: "dbclick",
            description: " Hàm dbclick dùng để thực hiện double click (nhấn đúp chuột) vào phần tử trên trang web"
        },
        {
            action: "dragAndDrop",
            description: "Hàm drapAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web"
        }

    ];


  for (const note of notes) {
    await page.getByPlaceholder("Enter note title").fill(note.action);
    await page.getByPlaceholder("Enter note content").fill(note.description);
    await page.getByRole("button", { name: "Add Note" }).click();
  }

  await page.getByPlaceholder("Search notes").fill("một hoặc nhiều");
});
