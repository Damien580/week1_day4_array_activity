// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
array.sort( function(a , b){ //This function sorts the array. the array.sort() operation will also
    if (a > b) return 1;     //use 
    if (a < b) return -1;
    return 0;
});
array.filter((num) => {
    return num >= -36 && num <= 43
})

console.log(array.filter)