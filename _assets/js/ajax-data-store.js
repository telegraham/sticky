function AjaxDataStore(url){
  this.url = url;
}
AjaxDataStore.prototype.get = function(callback){
  $.getJSON(this.url, callback).fail(function(param, param2){
    console.log("fail", param, param2)
  });
}