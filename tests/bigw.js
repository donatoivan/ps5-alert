describe("Big W", () => {
  before((browser) =>
    browser.url(
      "https://www.bigw.com.au/product/playstation-5-console/p/124625/"
    )
  );

  it("Test for Disc edition", (browser) => {
    browser.expect.element("body").text.to.contain("PlayStation 5 Console");
    browser.expect.element("body").text.not.to.contain("Add to cart");
  });

  it("Test for Digital edition", (browser) => {
    browser.url(
      "https://www.bigw.com.au/product/playstation-5-digital-edition-console/p/124626/"
    );
    browser.expect
      .element("body")
      .text.to.contain("PlayStation 5 Digital Edition Console");
    browser.expect.element("body").text.not.to.contain("Add to cart");
  });

  after((browser) => browser.end());
});
