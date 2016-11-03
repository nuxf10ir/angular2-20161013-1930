import { KishkevichIvanPage } from './app.po';

describe('kishkevich-ivan App', function() {
  let page: KishkevichIvanPage;

  beforeEach(() => {
    page = new KishkevichIvanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
