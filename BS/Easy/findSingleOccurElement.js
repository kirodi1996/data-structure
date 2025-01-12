function findSingleElement(arr) {
    const n = arr.length;
    if(n==1) return arr[0]
    if(arr[0]!==arr[1]) return arr[0]
    if(arr[n-1]!==arr[n-2]) return arr[n-1]

    let low = 1;
    let high = arr.length-2;
    while (low<=high) {
        const mid = Math.floor((low+high)/2)
        if(arr[mid]!== arr[mid-1] && arr[mid]!==arr[mid+1]) return arr[mid]
        if((mid%2 === 1) && arr[mid]===arr[mid-1] || (mid%2 === 0) && arr[mid]===arr[mid+1]) {
            low = mid+1
        } else high = mid-1
    }
    return -1
}

function main() {
    const arr = [2, 2, 15, 18, 18, 21, 21, 23, 23, 37, 37, 47, 47, 49, 49 ]
    console.log(findSingleElement(arr))
}

main()