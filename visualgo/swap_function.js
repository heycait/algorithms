var swap = function(array, firstIndex, secondIndex){
  var first = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = first;
}
module.exports = swap