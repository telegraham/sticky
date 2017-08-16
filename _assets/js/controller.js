//= require ajax-data-store
//= require node-list
//= require node
//= require edge

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
  this.edges = this.data.responses.map(function(response){
    return new Edge(response)
  })

  var $allLists = $(".allTheLists")
  for (var id in this.lists) {
    $allLists.append(this.lists[id].toHtml());
  }

}