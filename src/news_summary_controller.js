(function(exports) {
  function NewsSummaryController(articleView) {
    this.articleView = articleView
  }

  NewsSummaryController.prototype.renderHtml = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.articleView.htmlWrap();
  };

  NewsSummaryController.prototype.makeUrlChangeShowArticleForCurrentPage = function() {
    window.addEventListener("hashchange", showArticleForCurrentPage);
  };

  exports.NewsSummaryController = NewsSummaryController;
})(this);