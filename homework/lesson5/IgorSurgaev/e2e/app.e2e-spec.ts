import { UsersPage } from './app.po';

describe('users App', function() {
  let page: UsersPage;

  beforeEach(() => {
    page = new UsersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
