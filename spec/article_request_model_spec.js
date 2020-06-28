describe("ArticleRequest", function() {

    var articleRequest = new ArticleRequest;

  it ("should be an object which can be instantiated", function(){
    expect(articleRequest).toBeInstanceOf(Object);
  });

  it ("should have a healine", function() {
    expect(articleRequest.headline).toEqual("some_headline")
  });

  it ("should have a url", function() {
    expect(articleRequest.url).toEqual("www.some-url.com")
  });
});