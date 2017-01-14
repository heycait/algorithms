// https://www.reddit.com/r/cscareerquestions/comments/20ahfq/heres_a_pretty_big_list_of_programming_interview/


// Find the most frequent integer in an array

// Questions:
// What to do when there are multiple?
// Example input/output?

var frequentInt = function(array){
    var frequency = {};
    var integer;
    var count = 0;
    var duplicates = []

    for (var i = 0; i < array.length; i++) {
        var value = array[i]
        if(frequency[value]){
            frequency[value]++
        } else {
            frequency[value] = 1
        }
    }

    for(var key in frequency){
        if(frequency[key] > count){
            count = frequency[key]
            integer = key
            duplicates = []
        } else if (frequency[key] == count){
            duplicates.push(key)
        }
    }

   if(duplicates.length === 0){
       return integer
   } else {
       return 'There is no most frequent integer'
   }
}

console.log(frequentInt([1,2,2,2,2,2,3,4,5,6,6,6,6,6,7]))