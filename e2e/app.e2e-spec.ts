import { DziennikLekcyjnyPage } from './app.po';

describe('dziennik-lekcyjny App', () => {
  let page: DziennikLekcyjnyPage;

  beforeEach(() => {
    page = new DziennikLekcyjnyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
