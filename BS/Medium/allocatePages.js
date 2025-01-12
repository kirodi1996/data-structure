function isPossible(mid, arr) {
    let person = 1
    let last = 0
    for(let i=0; i<arr.length; i++) {
        
        if(arr[i]+last<=mid) {
            last += arr[i]
        } else {
            person++
            last = arr[i]
        }
    }
    return person
}

function allocatePages(arr, m) {
    const n = arr.length
    if(m>n) return -1;
    let low = Math.max(...arr)
    let high = arr.reduce((previousValue, currentValue) => {
        return currentValue+previousValue
    }, 0);
    
    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        const person = isPossible(mid, arr)
        if(person <= m) {
            high = mid-1
        } else {
            low = mid+1
        }
    }
    return low
}

function main() {
    const arr = [25, 46, 28, 49, 24]
    const m = 4
    console.log(allocatePages(arr, m))
}

main()