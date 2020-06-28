describe("NewsSummaryController", function() {

  it ("should instantiate with an article list view", function(){
    var view = new ArticleListView;
    var controller = new NewsSummaryController(view);
    expect(controller.articleView).toBeInstanceOf(ArticleListView);
  });
});


// var html = '<div><a href="#article/some headline">some headline</a></div><br>'
// view.htmlWrap = function() {
//       return html
//     };
    
//     var controller = NewsSummaryController(view)
//     controller.renderHtml()
//     expect(document.getElementById("app").innerHTML === html)