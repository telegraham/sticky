function RandomnessHelper(){
  
  
}

RandomnessHelper.between = function(low, high){
  return Math.floor(Math.random() * high) + low;
}