function swap(arr, low, high) {
    const temp = arr[low]
    arr[low] = arr[high]
    arr[high] = temp
}
function reverseAnArray(arr, low=0, high=arr.length-1) {
    if(low>=high) {
        return
    } 
    swap(arr, low, high)
    low++;
    high--;
    reverseAnArray(arr, low, high)
    return arr
}

function main() {
    const arr = [1,2,3,4,5]
    console.log(reverseAnArray(arr))
}

main()