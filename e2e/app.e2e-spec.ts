import { NgRestaurantsPage } from './app.po';

describe('ng-restaurants App', function() {
  let page: NgRestaurantsPage;

  beforeEach(() => {
    page = new NgRestaurantsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
