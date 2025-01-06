function merge(arr, low, mid, high) {
    let i = low;
    let j = mid+1;
    let temp = []
    while(i<=mid && j<=high) {
        if(arr[i]<=arr[j]) {
            temp.push(arr[i])
            i++
        } else {
            temp.push(arr[j])
            j++
        }
    }

    temp = temp.concat(arr.slice(i, mid+1)).concat(arr.slice(j, high+1))
    for (let k = low; k<=high; k++)
        arr[k] = temp[k-low]
}

function mergeSort (arr, low=0, high=arr.length-1) {
    if(low>=high) {
        return
    }

    const mid = Math.floor((low+high)/2)
    mergeSort(arr, low, mid)
    mergeSort(arr, mid+1, high)
    merge(arr, low, mid, high)
}

function main() {
    const arr = [13, 10, 12, 2, 4, 1, 0]
    mergeSort(arr)
    console.log(arr)
}

main()

