function isPossible(arr, mid) {
    let lastSum = 0;
    let count = 1
    for(let i=0; i<arr.length; i++) {
        if(lastSum+arr[i]<=mid) {
            lastSum+=arr[i]
        } else {
            count++
            lastSum = arr[i]
        }  
    }
    return count
}

function splitArrayLargestSum(arr, n) {
    
    let low = Math.max(...arr)
    let high = arr.reduce((previousValue, currentValue) => {
        return currentValue+previousValue
    }, 0);

    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        const count = isPossible(arr, mid)
        if (count <= n) {
            high = mid-1
        } else {
            low = mid+1
        }
    }
    return low
}

function main() {
    const arr = [1,2,3,4,5]
    const n = 3
    console.log(splitArrayLargestSum(arr, n))
}

main()