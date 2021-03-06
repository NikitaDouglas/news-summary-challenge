describe("NewsSummaryController", function() {

  it ("should instantiate with an article list view", function(){
    var view = new ArticleListView;
    var controller = new NewsSummaryController(view);
    expect(controller.articleView).toBeInstanceOf(ArticleListView);
  });

  it ("manipulates DOM and replaces innerHTML with htmlWrap", function() {
    var view = new ArticleListView;
    var html = '<div><a href="#article/some headline">some headline</a></div><br>'
      view.htmlWrap = function() {
        return html
      };
    var controller = new NewsSummaryController(view);
    controller.renderHtml();
    console.log(document.getElementById("app"))
    expect(document.getElementById("app").innerHTML).toEqual(html)
  });

  it ("shows show an article on a new page after hashchange event", function() {
    var view = new ArticleListView;
    var html = '<div><a href="#article/some headline">some headline</a></div><br>'
      view.htmlWrap = function() {
        return html
      };
    var controller = new NewsSummaryController(view)
    controller.renderHtml();
    controller.makeUrlChangeShowArticleForCurrentPage();
     var htmlForArticle = '<div>some headline</div>'
    expect(document.getElementById("app").innerHTML).toEqual(htmlForArticle)
  });
});