function lastOccurenceOfElement(arr, k) {
    let low = 0;
    let high = arr.length-1
    let last = -1; let first = -1
    while(low<=high) {
        const mid = Math.floor((high+low)/2)
        if(arr[mid] === k) {
            last = mid;
            low = mid+1;
        } else if (arr[mid]<k) {
            low = mid+1;
        } else {
            high = mid-1;
        }
    }
    
    low = 0;
    high = arr.length-1

    while(low<=high) {
        const mid = Math.floor((high+low)/2)
        if(arr[mid] === k) {
            first = mid;
            high = mid-1;
        } else if (arr[mid]<k) {
            low = mid+1;
        } else {
            high = mid-1;
        }
    }
    console.log([first, last])
}

function main() {
    const arr = [3,4,13,13,13,20,20,40]
    const k = 13;
    lastOccurenceOfElement(arr, k)
}
main()