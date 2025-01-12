function findMax(arr) {
    let max = -Infinity
    for(let i=0; i<arr.length; i++) {
        max = Math.max(max, arr[i])
    }
    return max
}

function isPossible(arr, th, mid) {
    let sum = 0
    for(let i=0; i<arr.length; i++) {
        sum+=Math.ceil(arr[i]/mid)
    }
    return th>=sum
}

function findTheSmallestDivisor(arr, th) {
    let high = findMax(arr)  
    let low = 1
    
    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        if(isPossible(arr, th, mid)) {
            high = mid-1
        } else {
            low = mid+1
        }
    }
    console.log(low)
}

function main() {
   const arr = [21212,10101,12121]
   const th = 1000000
   findTheSmallestDivisor(arr, th)
}

main()