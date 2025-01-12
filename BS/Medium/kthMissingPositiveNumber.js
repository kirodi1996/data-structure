function kthMissingPositiveNumber(arr, k) {
    let low = 0;
    let high = arr.length -1
    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        const missing = arr[mid]-mid
        if(missing<=k) {
            low = mid+1
        } else {
            high = mid-1
        }
    }
    return low+k
}

function main() {
    const arr = [4,7,9,10]
    const k = 7
    console.log(kthMissingPositiveNumber(arr, k))
}

main()