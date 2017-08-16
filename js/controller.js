function Controller() {
  var _this = this;
  var dataStore = new AjaxDataStore("data.json");
  dataStore.get(function(data){
    _this.data = data;
    _this.dataReady();
  });
}
Controller.prototype.dataReady = function() {
  console.log(this.data);
}

var controller = new Controller();
