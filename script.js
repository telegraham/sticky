function getCenterOfElement($element) {
  var offset = $element.offset();
  var height = $element.outerHeight();
  var width = $element.outerWidth();
  return {
    x: offset.left + width / 2,
    y: offset.top + height / 2
  }
}

function createLine(attrs) {

  var line = $("<line>")
  for (key in attrs) {
    line.attr(key, attrs[key]);
  }

  //<line x="20" y1="20" x2="20" y2="130"></line>
  return line;
}

function createPath(attrs) {
  return '<path d="M ' + attrs["x1"] + ' ' + attrs["y1"] + 
    ' L ' + attrs["x2"] + ' ' + attrs["y2"] + ' "/>';
}

$(function(){
  var $document = $(document);
  var corpse = $("body");
  var gee = $(".gee");

  corpse.on("mousedown", function(){
    return false;
  })

  $(".point").on("mousedown", function(){
    var $point = $(this);
    $point.addClass("down")
    corpse.addClass("mouseDown");

    var center = getCenterOfElement($point);

    

    $document.on("mousemove.pointdrag", function(mouseMoveEvent){

      gee.html(createPath({
        x1: center.x,
        y1: center.y,
        x2: event.clientX,
        y2: event.clientY,
        id: performance.now()
      }));

    });
    $document.one("mouseup", function(){
      $document.off(".pointdrag");
      $point.removeClass("down")
      corpse.removeClass("mouseDown");
    });
    return false;
  });
});