function arrayRotated(arr) {
    let low = 0;
    let high = arr.length-1
    let max = -Infinity
    let ans = -1
    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        if(arr[low]<arr[high]) {
            if(max < arr[high]) {
                max = arr[high]
                ans = high
            }
            break;
        }
        if(arr[low]<=arr[mid]) {
            if(max < arr[mid]) {
                max = arr[mid]
                ans = mid
            }
            low = mid+1;
        } else {        
            if(max < arr[high]) {
                max = arr[high]
                ans = high
            }
            high = mid-1;
        }
    }
    return arr.length === ans+1 ? 0 : ans+1 ;
}

function main() {
    const arr = [7,8,0,1,2,3]
    console.log(arrayRotated(arr))
}

main()