function NodeList(attrs){
  this.id = attrs.id

  this.nodes = [];
}
NodeList.prototype.addNode = function(node){
  this.cachedNodeIds = null;
  this.nodes.push(node);
}
NodeList.prototype.closestNode = function(x, y){
  if (!this.nodes.length) return null;
  return this.nodes.sort(function(element){
    var position = element.position();
    return PythagoreanHelper.distance(position.x, position.y, x, y);
  })[0]
}
NodeList.prototype.toHtml = function(){
  return "<ul class='nodeList'>" + this.nodes.map(function(node){
    return node.toHtml();
  }).join("\r\n") + "</ul>"
}
NodeList.prototype.nodeIds = function(){
  if (!this.cachedNodeIds) {
    this.cachedNodeIds = this.nodes.map(function(node){
      return node.id;
    });
  }
  return this.cachedNodeIds;
}
