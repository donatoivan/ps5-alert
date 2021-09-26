describe("Target", () => {
  before((browser) => browser.url("https://www.target.com.au/playstation-5"));

  it("Test for Disc edition", (browser) => {
    browser.waitForElementVisible("body").assert.titleContains("PlayStation 5");
    browser.expect.element("body").text.not.to.contain("Pre-order PS5 >");
  });

  it("Test for Digital edition", (browser) => {
    browser.waitForElementVisible("body").assert.titleContains("PlayStation 5");
    browser.expect
      .element("body")
      .text.not.to.contain("Pre-order PS5 Digital Edition >");
  });

  after((browser) => browser.end());
});
