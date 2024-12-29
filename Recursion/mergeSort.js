function merge(arr, low, mid, high) {
    let i=low;
    let j=mid+1;
    let res = []
    while (i<=mid && j<=high) {
        if(arr[i]<arr[j]) {
            res.push(arr[i++])
        } else {
            res.push(arr[j++])
        }
    }
    res = res.concat(arr.slice(i, mid+1)).concat(arr.slice(j, high+1))

    for(let k=low; k<=high; k++) {
        arr[k] = res[k-low]
    }

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
    const arr = [4,3,0,1,0,1,2,3,4,5,2,1]
    mergeSort(arr)
    console.log(arr)
}

main()