import { PartVIICliPage } from './app.po';

describe('part-vii-cli App', function() {
  let page: PartVIICliPage;

  beforeEach(() => {
    page = new PartVIICliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
