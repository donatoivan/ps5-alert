describe("JB HIFI", () => {
  before((browser) =>
    browser.url("https://www.jbhifi.com.au/pages/playstation-5")
  );

  it("Test for PS5", (browser) => {
    browser
      .waitForElementVisible("body")
      .assert.titleContains("PS5 - New PlayStation 5 At JB Hi-Fi!");
    browser.expect
      .element("body")
      .text.to.contain(
        "Due to high demand and limited stock allocations from Sony we are not taking further orders at this time."
      );
  });

  after((browser) => browser.end());
});
