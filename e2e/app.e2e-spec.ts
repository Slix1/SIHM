import { SIHMPage } from './app.po';

describe('sihm App', () => {
  let page: SIHMPage;

  beforeEach(() => {
    page = new SIHMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
