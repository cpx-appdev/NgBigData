import { NgGridSimplePoCPage } from './app.po';

describe('ng-grid-simple-po-c App', () => {
  let page: NgGridSimplePoCPage;

  beforeEach(() => {
    page = new NgGridSimplePoCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
