//= require node-list
//= require node
//= require edge

function Graph(lists, nodes, edges) {
  this.lists = lists;
  this.nodes = nodes;
  this.edges = edges;
}
Graph.prototype.eachList = function(callback) {
  for (var listId in this.lists) {
    callback(this.lists[listId]);
  }
}
Graph.prototype.eachNode = function(callback){
  for (var nodeId in this.nodes) {
    callback(this.nodes[nodeId]);
  }
}