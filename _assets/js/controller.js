//= require ajax-data-store
//= require node-list
//= require node
//= require edge
//= require edge-factory

function Controller() {
  var _this = this;
  var dataStore = new AjaxDataStore("data.json");
  dataStore.get(function(data){
    _this.data = data;
    _this.dataReady.call(_this);
  });
}
Controller.prototype.dataReady = function() {
  var _this = this;
  //do lists
  this.lists = {}
  this.data.questions.forEach(function(question){
    var list = new NodeList(question);
    _this.lists[list.id] = list;
  });

  //do nodes and wire up lists
  this.nodes = {};
  this.data.options.forEach(function(option){
    var node = new Node(option);
    var list = _this.lists[node.listId];

    node.list = list; //add list to node
    list.addNode(node); //add node to list

    _this.nodes[node.id] = node;
  });

  //do edges
  var ef = new EdgeFactory(this.data.responses);
  this.edges = ef.create(this.lists, this.nodes)

  //do html
  var $allLists = $(".allTheLists")
  for (var listId in this.lists) {
    $allLists.append(this.lists[listId].toHtml());
  }

  //get node elements
  for (var nodeId in this.nodes) {
    var node = this.nodes[nodeId];
    node.$element = $("#" + node.id)
  }

  this.paper = Raphael("svgWrapper", "100%", "100%");
  //draw edges
  this.edges.forEach(function(edge){
    _this.paper.path(edge.path());
  })

}