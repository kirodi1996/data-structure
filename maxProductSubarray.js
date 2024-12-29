function maxProductSubArray(arr) {
    let suffix = 1
    let prefix = 1
    let n = arr.length
    let ans = -Infinity ;
    for(let i=0; i<n; i++) {
       
        if(arr[i] === 0) suffix = 1
        if(arr[n-i-1] === 0) prefix = 1
        suffix *= arr[i]
        prefix *= arr[n-i-1]
        ans = Math.max(ans, Math.max(suffix, prefix))

    }
    return ans
}

function main() {
    const arr = [-1,-2,-4,5]
    console.log(maxProductSubArray(arr))
}

main()