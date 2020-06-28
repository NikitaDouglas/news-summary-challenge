(function(exports) {
  
  function ArticleList() {
    this.list = [];
    var i
    for (i = 0; i < 10; i++){
      this.list.push(new Article)
    };
  };

  ArticleList.prototype.returnList = function() {
    return this.list
  };
  
  exports.ArticleList = ArticleList
})(this);