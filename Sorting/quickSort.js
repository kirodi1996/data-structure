function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function partitionIndex(arr, low, high) {
    const pivot = arr[low]
    let i = low+1
    let j = high
    while(i<=j) {
        while(arr[i]<=pivot && i<=high) {
            i++;
        }
        while(arr[j]>pivot && j>0) {
            j--
        }
        if(i<j) {
            swap(arr, i , j)
        }

    }

    swap(arr, low ,j)
    return j
}

function quickSort(arr, low=0, high=arr.length-1) {
    if(low>=high) return;
    let index = partitionIndex(arr, low , high)
    quickSort(arr, low, index-1)
    quickSort(arr, index+1, high)
}

function main() {
    const arr = [13,12,1,2,5];
    quickSort(arr)
    console.log(arr)
}

main()