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
Graph.prototype.listAfter = function(list){
  var lastList = null;
  for (var listId in this.lists) {
    var thisList = this.lists[listId];
    if (lastList === list) return thisList;
    lastList = thisList;
  }
}
Graph.prototype.addEdge = function(edge){
  this.edges.push(edge)
}
Graph.prototype.listsAreAdjacent = function(firstList, secondList){
  return secondList === this.listAfter(firstList) || firstList === this.listAfter(secondList);
}