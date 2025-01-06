function buyOrSellStock(arr) {
    let maxProfit = 0
    let min = Infinity
    for(let i=0; i<arr.length; i++) {
        if(min>arr[i]) {
            min = arr[i]
        }
        maxProfit = Math.max(maxProfit, (arr[i]-min))
    }
    return maxProfit
}

function main() {
    const arr = [7,1,5,3,6,4]
    console.log(buyOrSellStock(arr))
}

main()