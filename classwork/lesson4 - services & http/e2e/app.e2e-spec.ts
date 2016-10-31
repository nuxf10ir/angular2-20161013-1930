import { Lesson4Services&HttpPage } from './app.po';

describe('lesson4---services-&-http App', function() {
  let page: Lesson4Services&HttpPage;

  beforeEach(() => {
    page = new Lesson4Services&HttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
