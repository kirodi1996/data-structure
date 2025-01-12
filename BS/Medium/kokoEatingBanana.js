function findMax(arr) {
    let max = -Infinity
    for(let i=0; i<arr.length; i++) {
        max = Math.max(max, arr[i])
    }
    return max
}

function kokoEatBanana(arr, hr) {
    let high = findMax(arr)
    let low = 1;
    let ans = high;
    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        let sum = 0;
        for(let i=0;i<arr.length; i++) {
            sum+=Math.ceil(arr[i]/mid)
        }
        if(sum<=hr) {
            ans = Math.min(ans, mid)
            high=mid-1
        } else if(sum>hr) {
            low=mid+1
        }

    }

    console.log(ans)
}

function main() {
    const arr = [5]
    const hr = 5
    kokoEatBanana(arr, hr)
}

main()
