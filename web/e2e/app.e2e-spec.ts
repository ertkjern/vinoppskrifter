import { VinoppskrifterPage } from './app.po';

describe('vinoppskrifter App', function() {
  let page: VinoppskrifterPage;

  beforeEach(() => {
    page = new VinoppskrifterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
