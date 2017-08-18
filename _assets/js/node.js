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
  if (!this.x || !this.y) {
    var pos = this.$element.position();
    var height = this.$element.outerHeight();
    var width = this.$element.outerWidth();
    this.x = pos.left + width / 2;
    this.y = pos.top + height / 2;
  }
  return { x: this.x, y: this.y };
}
Node.prototype.toHtml = function(){
  return "<li id='" + this.id + "' class='node'>" + this.name + "</li>"
}
Node.prototype.notifyPositionChanged = function(){
  this.position = null;
}