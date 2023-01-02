import path from "path";
import puppeteer from "puppeteer";

export async function snapshot(name: string) {
  // Create a browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Set viewport width and height
  await page.setViewport({ width: 1280, height: 720 });

  const website_url = 'https://dribbble.com/';

  // Open URL in current page  
  await page.goto(website_url, { waitUntil: 'networkidle0' });


  await page.screenshot({
    path: path.join(__dirname, "../uploads", `${name}.png`)
  });
  console.log("shot taken");


  await browser.close();
}