// also possible with lower bound
function searchInsertPosition(arr, k) {
    let low = 0;
    let high = arr.length-1;
    
    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        if(arr[mid]===k) {
            return mid
        } else if(arr[mid]>k) {
            high = mid-1; 
        } else {
            low = mid+1;
        }
    }
    return low
}

function main() {
    const arr = [1,2,4,7]
    const k = 10;
    console.log(searchInsertPosition(arr, k))
}

main()