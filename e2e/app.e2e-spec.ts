import { MeanCrudNg2Page } from './app.po';

describe('mean-crud-ng2 App', () => {
  let page: MeanCrudNg2Page;

  beforeEach(() => {
    page = new MeanCrudNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
