import { OlegkovalPage } from './app.po';

describe('olegkoval App', function() {
  let page: OlegkovalPage;

  beforeEach(() => {
    page = new OlegkovalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
