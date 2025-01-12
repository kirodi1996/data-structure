function isPossible(arr, mid) {
    
}

function painterPartition(arr, k) {
    let low = Math.max(arr)
    let high = arr.reduce((previousValue, currentValue) => {
        return currentValue+previousValue
    })

    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        const count = isPossible(arr, mid)
    }
}

function main() {
    const arr = [10,20,30,40]
    const k =2
    painterPartition(arr, k)
}

main()