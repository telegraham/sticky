//= require graph
//= require node-list
//= require node
//= require edge
//= require edge-factory

function GraphFactory(data) {
  this.questions = data.questions;
  this.options = data.options;
  this.responses = data.responses;
}
GraphFactory.prototype.createLists = function(questions){
  var lists = {}
  questions.forEach(function(question){
    var list = new NodeList(question);
    lists[list.id] = list;
  });
  return lists;
}
GraphFactory.prototype.createNodes = function(options){
  var nodes = {};
  options.forEach(function(option){
    var node = new Node(option);
    nodes[node.id] = node;
  });
  return nodes;
}
GraphFactory.prototype.linkNodesAndLists = function(nodes, lists){
  for (var nodeId in nodes){
    var node = nodes[nodeId];
    var list = lists[node.listId];
    list.addNode(node); //add node to list
    node.list = list; //add list to node
  }
}
GraphFactory.prototype.create = function(){

  var lists = this.createLists(this.questions)
  var nodes = this.createNodes(this.options)

  this.linkNodesAndLists(nodes, lists)
  
  var ef = new EdgeFactory(this.responses);
  var edges = ef.create(lists, nodes)
  var graph = new Graph(lists, nodes, edges);

  return new Graph(lists, nodes, edges);
}