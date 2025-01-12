function binarySearch(arr, searchElement) {
    let low=0;
    let high=arr.length-1;
    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        if(arr[mid] === searchElement) {
            return mid
        } else if(arr[mid]>searchElement) {
            high = mid-1
        } else {
            low = mid+1
        }
    }
    return -1;
}

function recursiveBinarySearch(arr, target, low=0, high=arr.length-1) {
    if(low>high) {
        return -1
    }

    let mid = Math.floor((low+high)/2)
    if(arr[mid]===target) {
        return mid
    } else if(arr[mid]>target) {
       return recursiveBinarySearch(arr, target, low, mid-1)
    } else {
       return recursiveBinarySearch(arr, target, mid+1, high)
    }

}

function main() {
    const arr = [1,2,3,4,5,6,7,18];
    const searchElement = 18;
    console.log(binarySearch(arr, searchElement))
    console.log(recursiveBinarySearch(arr, searchElement))
}

main()