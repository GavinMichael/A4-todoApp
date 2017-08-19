import { CompoTestPage } from './app.po';

describe('compo-test App', () => {
  let page: CompoTestPage;

  beforeEach(() => {
    page = new CompoTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
