(function(exports) {
  function ArticleListView(articleList) {
    this.list = articleList;
  }

  ArticleListView.prototype.htmlWrap = function() {
    html_array = []
    var articles = this.list.returnList();
    if (articles.length >= 1) {
      articles.forEach( article => {
        html_array.push(`<div><a href="#article/${article.headline}">${article.headline}</a></div><br>`)
      });
    };
    return html_array.join("")
  };

  exports.ArticleListView = ArticleListView;
})(this);