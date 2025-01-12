
function squareRoot(n) {
    if(n===0) return 0;
    let low = 1
    let high = n/2
    let ans = 1
    while (low<=high) {
        const mid = Math.floor((low+high)/2)
        if(mid*mid <= n) {
            ans = Math.max(ans, mid)
            low=mid+1
        } else if(mid*mid>n) {
            high = mid-1
        } else {
            low = mid+1
        }
    }
    console.log(ans)
}

function main() {
    const n = 24;
    squareRoot(n)
}

main()