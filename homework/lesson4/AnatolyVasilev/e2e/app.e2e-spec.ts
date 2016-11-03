import { AnatolyVasilevPage } from './app.po';

describe('anatoly-vasilev App', function() {
  let page: AnatolyVasilevPage;

  beforeEach(() => {
    page = new AnatolyVasilevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
