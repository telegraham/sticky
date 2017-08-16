//belongs to a list
function Node(incomingEdges, outgoingEdges, x, y) {
  this.incomingEdges = incomingEdges;
  this.outgoingEdges = outgoingEdges;
  this.x = x;
  this.y = y;
}
Node.prototype.position = function(){
  return { x: this.x, y: this.y }
}