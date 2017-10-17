//= require ajax-data-store
//= require graph-factory
//= require view

function Controller() {
  var _this = this;
  var dataStore = new AjaxDataStore("data.json");
  dataStore.get(function(data){
    _this.dataReady.call(_this, data);
  });
}
Controller.prototype.dataReady = function(data) {
  var _this = this;
  //do lists

  var gf = new GraphFactory(data);
  this.graph = gf.create();

  this.view = new View(this.graph);
  this.view.firstRender();
}