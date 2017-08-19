function View(graph){
  this.graph = graph;
}
View.prototype.firstRender = function(){

  //do list html
  var $allLists = $(".allTheLists")
  this.graph.eachList(function(list){
    $allLists.append(list.toHtml());
  })

  //set node elements
  this.graph.eachNode(function(node){
    node.$element = $("#" + node.id)
  })

  this.paper = Raphael("svgWrapper", "100%", "100%");

  this.drawEdges();

  $(window).resize(function(){
    _this.resetNodePositions();
    _this.drawEdges();
  })
}
View.prototype.resetNodePositions = function(){
  for (var nodeId in this.nodes) {
    this.graph.nodes[nodeId].notifyPositionChanged();
  }
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