function Edge(){
 /* this.sourceNode = sourceNode; //left
  this.destinationNode = destinationNode; //right*/
  this.nodes = [];
}
Edge.prototype.addNode = function(node){
  this.nodes.push(node)
}
Edge.prototype.path = function(){
  return "M" + this.nodes.map(function(node){
    var position = node.position();
    return position.x + "," + position.y;
  }).join(" L");
}