function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function findPartitionIndex(arr, low, high) {
    let pivot = arr[low]
    let i = low+1
    let j = high
    
    while(i<=j) {
        while(arr[i]<=pivot && i<=high) {
            i++;
        }
        while(arr[j]>=pivot && j>=(low+1)) {
            j--;
        }
        if(i<j) swap(arr, i, j)
    }
    swap(arr, low, j)

    return j
}

function quickSort(arr, low=0, high=arr.length-1) {
    if (low<high) {
        const partitionIndex = findPartitionIndex(arr, low, high)
        quickSort(arr, low, partitionIndex-1)
        quickSort(arr, partitionIndex+1, high)
    }
}

function main() {
    const arr = [5,10,11,6,3,4]
    quickSort(arr)
    console.log(arr)
}

main()