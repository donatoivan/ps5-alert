describe("JB HIFI", () => {
  before((browser) =>
    browser.url(
      "https://www.harveynorman.com.au/ps5-playstation-5-console-1.html"
    )
  );

  it("Test for PS5", (browser) => {
    browser
      .waitForElementVisible("body")
      .assert.titleContains("Page Not Found | Harvey Norman Australia");
  });

  after((browser) => browser.end());
});
