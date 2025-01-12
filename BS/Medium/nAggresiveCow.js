function isPossible(arr, totalCow, mid) {
    let cowCount = 1, last = arr[0]
    for(let i=1;i<arr.length;i++) {
        if(arr[i]-last>=mid) {
            cowCount++
            last = arr[i]
        }
    }
    return cowCount>=totalCow
}

function NAggresiveCow(arr, totalCow) {
    const n = arr.length-1
    let low = 1
    let high = arr[n-1]-arr[0]
    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        if(isPossible(arr, totalCow, mid)) {
            low=mid+1
        } else {
            high = mid-1
        }
    }

    return high
}

function main() {
    const arr = [0,3,4,7,10,9];
    const totalCow = 4
    arr.sort((a,b) => a-b)
    NAggresiveCow(arr, totalCow)
}

main()