function AjaxDataStore(url){
  this.url = url;
}
AjaxDataStore.prototype.get = function(callback){
  $.getJSON(this.url, callback);
}