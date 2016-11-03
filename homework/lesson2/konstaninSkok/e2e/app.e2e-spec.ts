import { Ng2learnPage } from './app.po';

describe('ng2learn App', function() {
  let page: Ng2learnPage;

  beforeEach(() => {
    page = new Ng2learnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
