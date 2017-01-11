var swap = require('./swap_function');

var insertion_sort = function(array){
	var i = 0;
	while(i < array.length){
		var j = i+1;
		while(j >= 0){
			if(array[j] < array[i]){
				swap(array, i, j)
				j--
				i--
			} else {
				i++
				break
			}
		}
	}
	return array
}

console.log(insertion_sort([10,5,14,7,12,2]))
console.log(insertion_sort([2,5,7,10,12,14]))
console.log(insertion_sort([14,2,7,5]))