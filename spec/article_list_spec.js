describe("ArticleList", function() {

  var articleList = new ArticleList

  it ("should instantiate with an array of articles", function(){
    expect(articleList.list).toBeInstanceOf(Array);
  });

  it ("should instantiate with 10 articles", function() {
    expect(articleList.list.length).toEqual(10)
  });

});