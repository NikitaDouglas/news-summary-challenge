describe("ArticleRequest", function() {

    var article = new Article;

  it ("should be an object which can be instantiated", function(){
    expect(article).toBeInstanceOf(Object);
  });

  it ("should have a headline", function() {
    expect(article.headline).toEqual("some_headline")
  });

  it ("should have a url", function() {
    expect(article.url).toEqual("www.some-url.com")
  });
});