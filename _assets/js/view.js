function View(graph){
  this.graph = graph;
}
View.prototype.firstRender = function(){

  var _this = this;

  //do list html
  var $allLists = $(".allTheLists")
  this.graph.eachList(function(list){
    $allLists.append(list.toHtml());
  })

  //set node elements
  this.graph.eachNode(function(node){
    node.$element = $("#" + node.id)
    node.$element.mousedown(_this.nodeDown.bind(_this, node));
    node.$element.mouseup(_this.nodeUp.bind(_this, node));
    node.$element.mouseover(_this.nodeOver.bind(_this, node));
    node.$element.mouseout(_this.nodeOut.bind(_this, node));
  })

  this.paper = Raphael("svgWrapper", "100%", "100%");

  this.drawEdges();

  $(window).resize(function(){
    _this.resetNodePositions();
    _this.drawEdges();
  });

  this.$document = $(document);
  this.$body = $("body");

  //prevent default select text
  this.$body.on("mousedown", function(){
    return false;
  })

}
View.prototype.nodeOver = function(node){
  if (this.dragging) {
    node.$element.addClass("over")
  }
}
View.prototype.nodeOut = function(node){
  if (this.dragging) {
    node.$element.removeClass("over")
  }
}
View.prototype.nodeUp = function(node){
  if (this.dragging) {
    console.log(this.draggingFrom, node);
  }
}
View.prototype.nodeDown = function(node){
  var _this = this;

  this.dragging = true;
  this.draggingFrom = node;

  var $document = $(document);
  var $body = $("body");

  node.$element.addClass("down")
  $body.addClass("mouseDown");

  $document.on("mousemove.pointdrag", function(mouseMoveEvent){
    var nextList = _this.graph.listAfter(node.list);
    var closestNode
      = nextList.closestNode(mouseMoveEvent.clientX, mouseMoveEvent.clientY);
    var $closest = $(".closest")
    if (closestNode && (!$closest.length
        || $closest[0] !== closestNode.$element[0])){
      $closest.removeClass("closest")
      closestNode.$element.addClass("closest");
    }
  });
  $document.one("mouseup", function(){
    $document.off(".pointdrag");

    $(".closest").removeClass("closest")
    $(".over").removeClass("over")
    node.$element.removeClass("down")
    $body.removeClass("mouseDown");
  });
  return false;
}
View.prototype.resetNodePositions = function(){
  this.graph.eachNode(function(node) {
    node.notifyPositionChanged();
  })
}
View.prototype.drawEdges = function(){
  var _this = this;
  this.graph.edges.forEach(function(edge){
    if (edge.path)
      edge.path.attr("path", edge.pathCoords());
    else
      edge.path = _this.paper.path(edge.pathCoords());
      edge.path.attr("stroke", "#056597");
  });
}