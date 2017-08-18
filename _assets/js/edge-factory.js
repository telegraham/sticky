function EdgeFactory(responses){
  this.responses = this.chunkResponsesByUserId(responses);
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

EdgeFactory.filterResponsesByList = function(responses, list){
  return responses.filter(function(response){
    return list.nodeIds().includes(response.optionId);
  })
}
EdgeFactory.prototype.create = function(lists, nodes){
  var edges = [];
  for (var userId in this.responses) {
    var responsesFromUser = this.responses[userId];
    var lastList;
    for (var listId in lists) {
      var list = lists[listId];
      if (lastList) {
        var userResponsesInLastList = EdgeFactory.filterResponsesByList(responsesFromUser, lastList);
        var userResponsesInThisList = EdgeFactory.filterResponsesByList(responsesFromUser, list);
        //draw all the lines between all the points
        userResponsesInLastList.forEach(function(responseInLastList){
          userResponsesInThisList.forEach(function(responseInThisList){
            var edge = new Edge();
            edge.addNode(nodes[responseInLastList.optionId]);
            edge.addNode(nodes[responseInThisList.optionId]);
            edges.push(edge);
          });
        });
      }
      lastList = list;
    }
  }
  return edges;
}