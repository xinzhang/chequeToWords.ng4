import { browser, by, element } from 'protractor';

export class ChequeConverter.Ng4Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
