const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Navigate to your website
  await page.goto('https://assess-admin.masaischool.com/questions/list?size=10&page=18');

  // Find all checkboxes and check them
  const checkboxes = await page.$$('input[type="checkbox"]');
  for (const checkbox of checkboxes) {
    await checkbox.click();
  }

  // Close the browser
  await browser.close();
})();
