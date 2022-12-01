const arr = [1,3,4,6,7,9,10,12,24,45,67,89,98,204,345,456,657,768,799,898,98909,2342343,45645645]
console.log(arr.length);

function binear(arr, target) {
    let min = 0
    let max = arr.length - 1
    let count = 0
    while (min <= max) {
        count++
        let pivot = Math.floor((min + max) / 2)
        if(arr[pivot] === target){
            console.log(count);
            return arr[pivot]
        }else if(target < arr[pivot]){
            max = pivot - 1
        }else if(target > arr[pivot]){
            min = pivot + 1
        }
    }

    return -1
}

console.log(binear(arr, 12));