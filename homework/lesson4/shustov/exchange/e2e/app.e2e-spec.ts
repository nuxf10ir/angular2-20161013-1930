import { ExchangePage } from './app.po';

describe('exchange App', function() {
  let page: ExchangePage;

  beforeEach(() => {
    page = new ExchangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
