//belongs to a list
function Node(attrs) {
  this.id = attrs.id
  this.listId = attrs.listId
  this.name = attrs.name;
}
Node.prototype.position = function(){
  if (!this.cachedPosition) {
    var pos = this.$element.position();
    var height = this.$element.outerHeight();
    var width = this.$element.outerWidth();
    this.cachedPosition = {
      x: pos.left + width / 2,
      y: pos.top + height / 2
    };
  }
  return this.cachedPosition;
}
Node.prototype.toHtml = function(){
  return "<li id='" + this.id + "' class='node'>" + this.name + "</li>"
}
Node.prototype.notifyPositionChanged = function(){
  this.cachedPosition = null;
}