1. Các thẻ HTML
2. Open Element in Developer tool
DOM:
- thẻ tự định nghĩa
- thẻ tiêu chuẩn:
1. thẻ cấu trúc khung trang
- <html>
- <head>: chưa metadata: tiêu đề website, hiển thị Google
- <body>: nội dung của cả website hiển thị

2. Thẻ bố cục và ngữ nghĩa
 <div></div>: khối/container chung
<header>, <footer>, <nav>, <section>: thẻ ngữ nghĩa

3. thẻ nội dung: 
- <h1> - <h6> : heading
- <paragraph>: đoạn văn
- <ul> <ol> <li>: danh sách

4. Thẻ tương tác & Media:
 - <a>: link
 - <img>: image

Thẻ Form: <form>
Table

Playwright syntax:
test: đơn vị cơ bản khai báo 1 test
step: khai báo từng step của testcase

 Navigate: goto(link)
 Click
 Input
 Radio/Checkbox
 Select
 Upload File
 
 getByRole


 Navigate: page.goto('link')


1. sử dụng page.locator để chọn phần tử trên trang => truyền vào xpath hoặc css
VD: page.locator("//input[@id='email]")

2. action Click
  click(): click đơn, giữa trung tâm;
  click({button : "right"}): click đơn, bằng chuột phải
  click({button : "middle"}): click đơn, bằng chuột giữa
  click({clickCount : 100}) : click 100 lần
  click ({force:true}): click dù disable (ko chờ, by pass auto-waiting)
  click({modifiers: ['Alt']}): click kèm phím ALT
  click({position:{x: 100, y: 100}})
  click({trial:true}): kiểm tra xem có click được hay ko, ko click thật

3. action Input: fill, press, pressSequentially (text-based)  
 - fill: giống như copy/paste vào 1 ô input
fill({
  force:true, //bắt buộc điền vào, không chờ visible, enable, editable
  timeout: 10_000 // thgian chờ tối đa 10s để fill
})

 - press: bấm 1 phím nào đó

press("a", {
  delay: 3_000, // mỗi khi thực hiện action xong dừng lại chờ
})

 - pressSequentially: giống như gõ từng chữ cái vào ô input
pressSequentially("String",{
  delay: 300,
  timeout:10_000
})

4. Action Upload
page.locator("").setInputFiles("") // truyền path của file
//click button upload file

5. handle dialog

6. input date time:
fill("YYYY-MM-DD"); //ngày
fill("YYYY-MM-DDTHH:mm");// ngày - giờ
fill("HH:mm); // giờ
fill("YYYY-MM"); // tháng
fill("2026-W05"); // tuần thứ 5 của năm 2026


7. Selection input: radio, checkbox, dropdown

Checkbox: 
hàm isChecked() => trả về T/F, check trạng thái
check():uncheck()
  getByRole("checkbox", { name: "Reading" }).check();

Radio:  
  getByRole("radio", { name: "Female" }).check();

dropdown
selectOption("jp")//truyền value vào
selectOption({label:Japan})// truyền label vào

datalist: đưa gợi ý



8. Hover

hàm hover(): hiển thị tooltip


Đối với dialog, cần khai báo listener trước khi thực hiện action để open dialog, eg:
page.once("dialog", async (dialog) => {
        await dialog.accept();
        });
      await deleteButton.click();


 Cấu trúc test:
 test("Verify the Contact Name field", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.getByRole("link", { name: "Create Contact" }).click();
  
});
