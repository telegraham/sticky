//belongs to a list
function Node(attrs) { /* incomingEdges, outgoingEdges, x, y */ 
  /*this.incomingEdges = incomingEdges;
  this.outgoingEdges = outgoingEdges;
  this.x = x;
  this.y = y;*/
  this.id = attrs.id
  this.listId = attrs.listId
  this.name = attrs.name;
}
Node.prototype.position = function(){
  return { x: this.x, y: this.y }
}
Node.prototype.toHtml = function(){
  return "<li class='node'>" + this.name + "</li>"
}