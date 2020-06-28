describe("ArticleListView", function() {

  it ("instatiates with an article list", function() {
    var list = new ArticleList;
    var listView = new ArticleListView(list);
    expect(listView.list.length).toEqual(10)
  });

});