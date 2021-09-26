describe("Amazon", () => {
  before((browser) =>
    browser.url(
      "https://www.amazon.com.au/PlayStation-5-Console/dp/B08HHV8945/ref=sr_1_1?brr=1&dchild=1&qid=1632663310&rd=1&s=videogames&sr=1-1"
    )
  );

  it("Test for Disc edition", (browser) => {
    browser.expect.element("body").text.to.contain("PlayStation 5 Console");
    browser.expect.element("body").text.not.to.contain("Add to Cart");
  });

  it("Test for Digital edition", (browser) => {
    browser.url(
      "https://www.amazon.com.au/PlayStation-5-Digital-Edition-Console/dp/B08HLWDMFQ/ref=sr_1_2?brr=1&dchild=1&qid=1632663397&rd=1&s=videogames&sr=1-2"
    );
    browser.expect
      .element("body")
      .text.to.contain("PlayStation 5 Digital Edition Console");
    browser.expect.element("body").text.not.to.contain("Add to Cart");
  });

  after((browser) => browser.end());
});
