export function binarySearch(sortedArray, target){
    let left = 0;
    let right = sortedArray.length - 1;

    while(left <= right){
        let middle = Math.floor((left + right) / 2);
        let middleEl = sortedArray[middle]
        if(middleEl === target){
            console.log(`found the target: ${target} at the index ${middle}`)
            return middle
        }else if(middleEl < target){
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    console.log("Not found")
    return - 1
}

console.log(binarySearch([1,2,3,4,5,6,7,],5))