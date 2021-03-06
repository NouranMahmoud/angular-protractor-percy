import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
const percySnapshot = require('@percy/protractor');

describe('workspace-project App', () => {
  let page: AppPage;

  it('should visually render the page', () => {
    browser.get('http://localhost:4200')
    percySnapshot('buttons');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
