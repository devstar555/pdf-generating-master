import { PdfGeneratePage } from './app.po';

describe('pdf-generate App', function() {
  let page: PdfGeneratePage;

  beforeEach(() => {
    page = new PdfGeneratePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
