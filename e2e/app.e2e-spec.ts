import { UdemyMaxDatabindingPage } from './app.po';

describe('udemy-max-databinding App', function() {
  let page: UdemyMaxDatabindingPage;

  beforeEach(() => {
    page = new UdemyMaxDatabindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
