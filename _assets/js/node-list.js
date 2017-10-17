//= require pythagorean-helper
function NodeList(attrs){
  this.id = attrs.id
  this.name = attrs.name
  this.subtitle = attrs.subtitle
  this.nodes = [];
}
NodeList.prototype.addNode = function(node){
  this.cachedNodeIds = null;
  this.nodes.push(node);
}
NodeList.prototype.closestNode = function(x, y){
  if (!this.nodes.length) return null;
  this.nodes.sort(function(a, b){
    return a.distanceFrom(x, y) - b.distanceFrom(x, y);
  });
  return this.nodes[0];
}
NodeList.prototype.toHtml = function(){
  return "<li class='nodes'><header class='nodes__header'><h2>" + this.name  + "</h2>" + 
  (this.subtitle ? ("<p class='subtitle'>" + this.subtitle + "</p>") : "") + 
  "</header><ol class='nodes__list'>" + this.nodes.map(function(node){
    return node.toHtml();
  }).join("\r\n") + "</ol></li>"
}
NodeList.prototype.nodeIds = function(){
  this.cachedNodeIds = this.cachedNodeIds || this.nodes.map(function(node){
    return node.id;
  });
  return this.cachedNodeIds;
}
