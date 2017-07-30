import { ChequeConverter.Ng4Page } from './app.po';

describe('cheque-converter.ng4 App', () => {
  let page: ChequeConverter.Ng4Page;

  beforeEach(() => {
    page = new ChequeConverter.Ng4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
