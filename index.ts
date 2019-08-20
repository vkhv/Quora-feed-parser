import * as puppeteer from 'puppeteer';

export default async (login: string, pass: string) => {
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage();
    await page.goto('https://www.quora.com/');
    const emailInput = await page.$("[placeholder=Email]");
    const passwordInput = await page.$("[placeholder=Password]");
    const submitButton = await page.$('[value="Login"]');
    await emailInput.type(login);
    await passwordInput.type(pass);
    await submitButton.click();

    await submitButton.click();
    await page.waitForNavigation();

    const firstTitleNode = await page.$('.ui_content_title');
    const firstTitleText = await (await firstTitleNode.getProperty('textContent')).jsonValue();

    const firstMoreButton = await page.$('.ui_qtext_more_link');
    await firstMoreButton.click();
    await page.waitFor(300);
    const contentSectionNode = await page.$('.ExpandedAnswer');
    const contentText = await (await contentSectionNode.getProperty('textContent')).jsonValue();

    await browser.close();

    return [firstTitleText, contentText];
};
