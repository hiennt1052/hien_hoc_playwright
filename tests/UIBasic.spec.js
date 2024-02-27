const {test,expect} = require ('@playwright/test');

test('checkLoginFeature', async({browser}) =>{
    const browser = await browser.newContext();
    const page = await browser.newPage();
    const userName = page.locator("#username");
    const passWord = page.locator("#password");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill("rahulshetty");
    await passWord.fill("learning");
    await page.locator("#signInBtn").click();
    //console.log(await page.locator("[style='display: none;']").innerText());
    await expect(page.locator("[style *= 'none']")).toContainText("Incorrect");

    await userName.fill("rahulshettyacademy");
    await page.locator("#signInBtn").click();
    await expect(page).toHaveTitle("ProtoCommerce");

});