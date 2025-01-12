function findFloorAndCeil(arr, k) {
    let low = 0;
    let high = arr.length-1;
    let floor = -1, ceil= arr.length;
    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        if(arr[mid]>=k) {
            ceil = arr[mid];
            high = mid-1;
        } else {
            low = mid+1;
        }
    }

    low = 0;
    high = arr.length-1;
    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        if(arr[mid]<=k) {
            floor = arr[mid];
            low = mid+1;
        } else {
            high = mid-1;
        }
    }
    return [floor, ceil]
}

function main() {
    const arr = [3, 4, 7, 8, 8, 10]
    const k = 5
    console.log(findFloorAndCeil(arr, k)) 
}

main()