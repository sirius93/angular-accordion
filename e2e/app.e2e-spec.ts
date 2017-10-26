import { AccordionExamplePage } from './app.po';

describe('accordion-example App', () => {
  let page: AccordionExamplePage;

  beforeEach(() => {
    page = new AccordionExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
