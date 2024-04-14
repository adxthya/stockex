"use server";
import puppeteer from "puppeteer";

export default async function fetchData(stock: string) {
  const url = `https://www.google.com/finance/quote/${stock}:NSE?hl=en`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const priceElement = await page.$(".fxKbKc");
  const price = await (
    await priceElement?.getProperty("textContent")
  )?.jsonValue();
  const varianceElement = await page.waitForSelector("span.ZYVHBb");
  const variance = await (
    await varianceElement?.getProperty("textContent")
  )?.jsonValue();
  await page.goto(url + "&window=1Y");
  const yearReturnsElement = await page.waitForSelector("span.ZYVHBb");
  const yearReturns = await (
    await yearReturnsElement?.getProperty("textContent")
  )?.jsonValue();
  await page.goto(url + "&window=1M");
  const monthReturnsElement = await page.waitForSelector("span.ZYVHBb");
  const monthReturns = await (
    await monthReturnsElement?.getProperty("textContent")
  )?.jsonValue();
  browser.close();
  return { price, variance, yearReturns, monthReturns };
}
