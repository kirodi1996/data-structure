function findMinAndMax (arr) {
    let min = Infinity
    let max = -Infinity
    for(let i=0;i<arr.length;i++) {
        min = Math.min(min, arr[i])
        max = Math.max(max, arr[i])
    }
    return [min, max]
}

function countBouquets (arr, mid, k) {
    let count = 0
    let bouquet = 0
    for(let i=0; i<arr.length; i++) {
        if(arr[i]<=mid) {
            count++
        } else {
            bouquet+=Math.floor(count/k)
            count=0
        }
    }
    bouquet+=Math.floor(count/k)
    return bouquet
}

function minDaysToCreateBouquets (arr, m, k) {
    if(m*k>arr.length) {
        return -1
    }

    let [low, high] = findMinAndMax(arr)
    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        
        if(countBouquets(arr, mid, k)<m) {
            low=mid+1
        } else {
            high = mid-1
        }
    }
    console.log(low)
}

function main () {
    const arr = [7, 7, 7, 7, 13, 11, 12, 7];
    const m = 2
    const k = 3
    minDaysToCreateBouquets(arr, m, k)
}

main()