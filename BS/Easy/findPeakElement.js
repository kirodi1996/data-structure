function findPeakElement(arr) {
    const n = arr.length;
    if(n===1 || arr[0]>arr[1]) return 0
    if(arr[n-2]<arr[n-1]) return n-1
    let low = 1
    let high = arr.length-2
    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]) return mid
        if(arr[mid]>arr[mid-1] && arr[mid]<arr[mid+1]) low = mid+1
        if(arr[mid]<arr[mid-1] && arr[mid]>arr[mid+1]) high = mid-1
        else low = mid+1
    }
    return -1
}
function main() {
    const arr = [1,2,3,4,5,6,7,8,5,1]
   console.log(findPeakElement(arr))
}

main()