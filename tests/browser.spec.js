import { test, expect, chromium } from '@playwright/test'

function waitFor(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, seconds*1000);
    });
}

// test('Explain the use of fixtures', async ({ page, browser, context, request, browserName }) => {
//     //browser: browsers are shared for faster execution
//     //context: isolate context (browser session) and the page belongs to this context 
//     //page: isolate page for the test
//     //request: isolated APIRequestContext for this test
 
//     await page.goto("https://www.google.com");
//     console.log("Browser Name ====> ", browserName);
// })

test("Browser, context and page",async ()=>{
    // creating the browser
    const browser = await chromium.launch();

    // creating the context
    const context = await browser.newContext();

    // These cookies will be shared to every page within the context
    await context.addCookies([{name:"csrftoken", value: "mytokenvalue123", url: "https://www.google.com"}])
    // creating 2 pages within the context
    const page = await context.newPage();
    const page2 = await context.newPage();
  
    await page.goto("https://www.google.com");
    await page2.goto("https://www.google.com")
    
    //console.log("Browser contexts =>", browser.contexts());

    // Returns the array of open pages in the context
    //console.log("Open pages => ",context.pages())
    
    //await waitFor(1)
    await browser.close();
})