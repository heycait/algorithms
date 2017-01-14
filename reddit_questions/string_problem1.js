// https://www.reddit.com/r/cscareerquestions/comments/20ahfq/heres_a_pretty_big_list_of_programming_interview/

// Find the first non-repeated character in a String

// Question:
// Clarify the problem - repeat understanding of problem (ask for example)
    // I thought it meant to find the unique character so eeefgf should return g
    // but it could mean something like eeefgf should return f

var nonRepeated = function(string){
    var coveredChars = []
    var nonRepeat = string.charAt(0)
    var i = 1;

    while(i < string.length){
        for(var j = i; j < string.length; j++){
            if(coveredChars.includes(nonRepeat)){
                if(i+1 > string.length){
                    nonRepeat = "doesn't exist"
                } else {
                    nonRepeat = string.charAt(i+1)
                }
                break
            } else if(string.charAt(j) == nonRepeat){
                coveredChars.push(nonRepeat)
                nonRepeat = string.charAt(i)
                break
            }
        }
        i++
    }
    return nonRepeat
}

console.log(nonRepeated('iamanonrepeatstr'))
console.log(nonRepeated('amanonrepeatstr'))
console.log(nonRepeated('geeksforgeeks'))
console.log(nonRepeated('mma'))

// Redo the problem as the inverse of the frequentInt solution (general_problem1.js)
// This takes too much time n^2