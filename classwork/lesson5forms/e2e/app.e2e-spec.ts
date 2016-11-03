import { Lesson5formsPage } from './app.po';

describe('lesson5forms App', function() {
  let page: Lesson5formsPage;

  beforeEach(() => {
    page = new Lesson5formsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
