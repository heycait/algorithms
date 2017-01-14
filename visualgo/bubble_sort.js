var swap = require('./swap_function');

var bubble_sort = function(array){
  var endpoint = array.length;
  while (endpoint > 0){
    for(var i = 0; i < endpoint; i++){
      if(array[i] > array[i+1]){
        swap(array, i, i+1)
      }
    }
    endpoint--
  }
  return array
}

console.log(bubble_sort([10,5,14,7,12,2]))