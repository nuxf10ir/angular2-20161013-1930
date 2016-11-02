import { KonstantinSkokPage } from './app.po';

describe('konstantin-skok App', function() {
  let page: KonstantinSkokPage;

  beforeEach(() => {
    page = new KonstantinSkokPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
