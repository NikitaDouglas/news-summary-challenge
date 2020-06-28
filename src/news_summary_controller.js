(function(exports) {
  function NewsSummaryController(articleView) {
    this.articleView = articleView
  }

  NewsSummaryController.prototype.renderHtml = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.articleView.htmlWrap();
  };

  exports.NewsSummaryController = NewsSummaryController;
})(this);