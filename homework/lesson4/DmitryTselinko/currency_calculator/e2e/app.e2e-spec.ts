import { CurrencyCalculatorPage } from './app.po';

describe('currency-calculator App', function() {
  let page: CurrencyCalculatorPage;

  beforeEach(() => {
    page = new CurrencyCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
