var swap = function(array, firstIndex, secondIndex){
  var first = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = first;
}

var selection_sort = function(array){
  var i = 0;
  var length = array.length

  while (i < length) {
    var min = array[i];
    var index = i
    for(var j = i+1; j < length; j++){
      if (array[j] < min){
        min = array[j]
        index = j
      }
    }
    swap(array, i, index)
    i++
  }
  return array
}

console.log('testing');
console.log(selection_sort([1,5,7,3,2,8]))