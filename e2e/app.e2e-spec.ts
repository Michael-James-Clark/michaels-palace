import { NearSpotPage } from './app.po';

describe('near-spot App', () => {
  let page: NearSpotPage;

  beforeEach(() => {
    page = new NearSpotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
