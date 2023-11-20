//create a function that takes an array of numbers and returns a number that is the sum of all values in the array.
// let array = [1,2,3,4,5]

// function add(a,b){
//     return a + b
//    }
// Build my own reduce method
// function reduce(array,callback,accumulator = 0){
//     for(let i of array){
//      accumulator = callback(accumulator, i)
//     }
//     return accumulator
// }


/////////////////////////////////////////////////////////////
// using built in reduce method
// let total = array.reduce((a,b) =>{
// return a+b
// },0)

// console.log(total)
///////////////////////////////////////////////////////////////
//using old school way with for loop
export function reduce(array){
    let sum = 0;
    for(let i =0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}

