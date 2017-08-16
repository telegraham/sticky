function NodeList(nodes){
  this.nodes = nodes;
}
NodeList.prototype.closestNode = function(x, y){
  if !this.nodes.length return null;
  return this.nodes.sort(function(element){
    var position = element.position();
    return PythagoreanHelper.distance(position.x, position.y, x, y);
  })[0]
}

