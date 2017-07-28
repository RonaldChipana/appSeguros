import { AppSeguros2Page } from './app.po';

describe('app-seguros2 App', () => {
  let page: AppSeguros2Page;

  beforeEach(() => {
    page = new AppSeguros2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
