//belongs to a list
function Node(attrs) {
  this.id = attrs.id
  this.listId = attrs.listId
  this.name = attrs.name;
  this.notifyPositionChanged();
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
Node.prototype.distanceFrom = function(x, y) {
  var position = this.position();
  if (!this.cachedDistances[x]) {
    this.cachedDistances[x] = {};
  }
  if (!this.cachedDistances[x][y])
    this.cachedDistances[x][y]
      = PythagoreanHelper.distance(position.x, position.y, x, y)
  return this.cachedDistances[x][y];
}
Node.prototype.toHtml = function(){
  return "<li id='" + this.id + "' class='node'>" + this.name + "</li>"
}
Node.prototype.notifyPositionChanged = function(){
  this.cachedPosition = null;
  this.cachedDistances = {};
}