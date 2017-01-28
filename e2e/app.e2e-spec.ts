import { ShipFinderPage } from './app.po';

describe('ship-finder App', function() {
  let page: ShipFinderPage;

  beforeEach(() => {
    page = new ShipFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
