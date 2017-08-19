//= require edge

function EdgeFactory(responses){
  this.userResponses = this.chunkResponsesByUserId(responses);
}
EdgeFactory.prototype.chunkResponsesByUserId = function(responses){
  var chunked = {}
  responses.forEach(function(response){
    if (!chunked[response.userId]) {
      chunked[response.userId] = [];
    }
    chunked[response.userId].push(response);
  })
  return chunked;
}
EdgeFactory.prototype.eachUserResponses = function(callback){
  for (var userId in this.userResponses) {
    callback(this.userResponses[userId]);
  }
}
EdgeFactory.filterResponsesByList = function(responses, list){
  return responses.filter(function(response){
    return list.nodeIds().includes(response.optionId);
  })
}
EdgeFactory.chunkListCouplets = function(lists){
  var listCouplets = [];
  var lastList = null;
  for (var listId in lists) {
    var list = lists[listId];
    if (lastList) {
      listCouplets.push([lastList, list])
    }
    lastList = list;
  }
  return listCouplets;
}

EdgeFactory.prototype.create = function(lists, nodes){
  var listCouplets = EdgeFactory.chunkListCouplets(lists);

  var edges = [];
  this.eachUserResponses(function(userResponses){
    listCouplets.forEach(function(listCouplet){
       edges = edges.concat(EdgeFactory.userEdgesForListCouplet(userResponses, listCouplet, nodes))
    });
  });
  return edges;
}

EdgeFactory.userEdgesForListCouplet = function(userResponses, listCouplet, nodes){
  var edges = [];
  var lastListResponses
    = EdgeFactory.filterResponsesByList(userResponses, listCouplet[0]);
  var thisListResponses
    = EdgeFactory.filterResponsesByList(userResponses, listCouplet[1]);

  //draw all the lines between all the points
  lastListResponses.forEach(function(lastListResponse){
    thisListResponses.forEach(function(thisListResponse){
      var edge = EdgeFactory.createEdge(lastListResponse, thisListResponse, nodes);
      edges.push(edge)
    });
  });

  return edges;
}
EdgeFactory.createEdge = function(response1, response2, nodes) {
  var edge = new Edge();
  edge.addNode(nodes[response1.optionId]);
  edge.addNode(nodes[response2.optionId]);
  return edge;
}