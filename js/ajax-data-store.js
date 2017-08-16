function AjaxDataStore(url){
  this.url = url;
}
AjaxDataStore.prototype.get = function(callback){
  $.ajax(this.url, {
    success: callback
  });
}