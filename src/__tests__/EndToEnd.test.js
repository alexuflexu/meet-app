import puppeteer from 'puppeteer';

jest.setTimeout(60000);

describe('show/hide event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('li', { timeout: 30000 }); 
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event-details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see details', async () => {
    await page.waitForSelector('button', { timeout: 5000 });
    await page.click('button');
    await page.waitForTimeout(1000); 
    const eventDetails = await page.$('.event-details');
    expect(eventDetails).not.toBeNull();
  });

  test('User can collapse an event to hide details', async () => {
    await page.waitForSelector('button', { timeout: 5000 });
    await page.click('button');
    await page.waitForTimeout(1000); 
    const eventDetails = await page.$('.event-details');
    expect(eventDetails).toBeNull();
  });
});