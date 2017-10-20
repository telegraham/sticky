function Edge(attrs){
  this.nodes = [];
  this.user = attrs.user;
}
Edge.prototype.addNode = function(node){
  this.nodes.push(node)
}
Edge.prototype.pathCoords = function(){
  return "M" + this.nodes.map(function(node){
    var position = node.position();
    return position.x + "," + position.y;
  }).join(" L");
}