describe("ArticleRequest", function() {

  it ("should be an object which can be instantiated", function(){
    var articleRequest = new ArticleRequest;
    expect(articleRequest).toBeInstanceOf(Object);
  });
});