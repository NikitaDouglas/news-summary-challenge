describe("ArticleListView", function() {

  function Article() {
    this.headline = "some headline"
    this.url = "www.url.com"
  }

  var article = new Article

  it ("instatiates with an article list", function() {
    var list = new ArticleList;
    var listView = new ArticleListView(list);
    expect(listView.list).toBeInstanceOf(ArticleList)
  });

  it ("wraps the article list in html elements", function() {
    var list = new ArticleList;
    list.list = [];
    list.list.push(article)

    var listView = new ArticleListView(list);
    
    var html = '<div><a href="#article/some headline">some headline</a></div><br>'
   
    expect(listView.htmlWrap()).toEqual(html)
  });

});