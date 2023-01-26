// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let min = [0]
let max = [0]

for(let i = 0; i < array.length; i++){
    console.log(array[i])
let currentValue = array[i]
   if (currentValue < min){
    min = currentValue
    console.log(`The current value ${currentValue} is lower that our current ${min}`)
    
   }
   if (currentValue > max){
       max = currentValue
       console.log(`the current value ${currentValue} is higher than our current maximum ${max}`)
       
   }
}
console.log(`in the array ${array}, the highest value is ${max}, and the lowest value is ${min}`)