(function(exports) {
  
  function ArticleList() {
    this.list = [];
    var i
    for (i = 0; i < 10; i++){
      this.list.push(new Article)
    };
  };
  exports.ArticleList = ArticleList
})(this);